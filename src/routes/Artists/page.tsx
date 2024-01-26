import { Wrapper } from "@/components/Wrapper/wrapper";
import s from "../ownStyles.module.scss";
import { topArtistsService } from "@/api/top-artists/service";
import { ArtistsList } from "./_components/ArtistsList/artists-list";
import { MyPagination } from "../../components/Pagination/pagination";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { Loader } from "@/components/Loader/loader";

const ArtistsPage = () => {
  const [searchParams, _] = useSearchParams();

  const { data, isLoading } = useQuery({
    queryKey: ["top_artists", searchParams.get("page")],
    queryFn: () => topArtistsService.getTopArtists(searchParams.get("page")),
  });

  return (
    <Wrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <aside className={s.container}>
          <p>Popular Artists</p>
          <ArtistsList data={data} />
          <MyPagination totalPages={data?.artists["@attr"].totalPages} />
        </aside>
      )}
    </Wrapper>
  );
};

export default ArtistsPage;
