import { topArtistsService } from "@/api/top-artists/service";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import s from "./styles.module.scss";
import { Loader } from "@/components/Loader/loader";
import { useCallback, useMemo, useState } from "react";

export const ArtistPage = () => {
  const [searchParams, _] = useSearchParams();
  const [rerender, setRerender] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["artist", searchParams.get("name")],
    queryFn: () => topArtistsService.getArtist(searchParams.get("name")),
  });

  const isInFav = useMemo(() => {
    let fav: Array<string> = [];
    if (localStorage.getItem("favorites")) {
      fav = JSON.parse(localStorage.getItem("favorites")!);
      const index = fav.findIndex((el) => el === searchParams.get("name"));
      if (index === -1) return false;
      else return true;
    } else {
      return false;
    }
  }, [searchParams.get("name"), rerender]);

  const addToFav = useCallback((name?: string) => {
    if (!name) return;
    let fav: Array<string> = [];
    if (localStorage.getItem("favorites")) {
      fav = JSON.parse(localStorage.getItem("favorites")!);
      if (fav.findIndex((el) => el === name) !== -1) {
        return;
      } else {
        fav.push(name);
      }
    } else {
      fav.push(name);
    }
    localStorage.setItem("favorites", JSON.stringify(fav));
    setRerender((prev) => !prev);
  }, []);

  
  const removeFromFav = useCallback((name?: string) => {
    if (!name) return;
    let fav: Array<string> = [];
    if (localStorage.getItem("favorites")) {
      fav = JSON.parse(localStorage.getItem("favorites")!);
      if (fav.findIndex((el) => el === name) === -1) {
        return;
      } else {
        fav = fav.filter((el) => el !== name);
      }
    } else {
      return;
    }
    localStorage.setItem("favorites", JSON.stringify(fav));
    setRerender((prev) => !prev);
  }, []);



  if (isLoading) {
    return <Loader />;
  }
  return (
    <main className={s.container}>
      <div>
        <img
          width={300}
          height={300}
          src={data?.artist.image.find((img) => img.size === "mega")?.["#text"]}
        ></img>
      </div>
      <h3>{data?.artist.name}</h3>
      <p>{data?.artist.bio.content}</p>
      {isInFav ? (
        <button
          onClick={() => removeFromFav(data?.artist.name)}
          className={s.fav}
        >
          Удалить из избранного
        </button>
      ) : (
        <button onClick={() => addToFav(data?.artist.name)} className={s.fav}>
          Добавить в избранное
        </button>
      )}
    </main>
  );
};
