import { topAlbumsService } from "@/api/top-albums/service";
import { Loader } from "@/components/Loader/loader";
import { Wrapper } from "@/components/Wrapper/wrapper";
import { useQuery } from "@tanstack/react-query";
import { AlbumsList } from "./_components/AlbumsList/albums-list";
import s from "../ownStyles.module.scss"
import { TagSelect } from "./_components/Select/select";
import { useState } from "react";

const AlbumsPage = () => {
  const [tag, setTag] = useState("rock")
  console.log(tag)

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["top_albums", tag],
    queryFn: () => topAlbumsService.getTopAlbums(tag),
  });

  return (
    <Wrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <aside className={s.container}>
          <p>Popular Albums</p>
          <TagSelect refetch={refetch} setTag={setTag} />
          <AlbumsList data={data} />
        </aside>
      )}
    </Wrapper>
  );
};

export default AlbumsPage;
