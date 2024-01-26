import { Wrapper } from "@/components/Wrapper/wrapper";
import { useEffect, useState } from "react";
import s from "./styles.module.scss";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<Array<string> | null>([]);

  useEffect(() => {
    if (localStorage.getItem("favorites")) {
      setFavorites(JSON.parse(localStorage.getItem("favorites")!));
    } else {
      setFavorites([]);
    }
  }, []);

  if (!favorites?.length) {
    return (
      <Wrapper>
        <div className={s.empty}>Empty :(</div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className={s.favContainer}>
        {favorites?.map((el) => (
          <Link key={el} to={`/artist?name=${el}`}>
            <Button>{el}</Button>
          </Link>
        ))}
      </div>
    </Wrapper>
  );
};
