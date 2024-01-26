import { topTracksService } from "@/api/top-tracks/service";
import { Wrapper } from "@/components/Wrapper/wrapper";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { MyPagination } from "../../components/Pagination/pagination";
import s from "../ownStyles.module.scss";
import { TracksList } from "./_components/TracksList/tracks-list";
import { Loader } from "@/components/Loader/loader";

const TracksPage = () => {
  const [searchParams, _] = useSearchParams();

  const { data, isLoading } = useQuery({
    queryKey: ["top_tracks", searchParams.get("page")],
    queryFn: () => topTracksService.getTopTracks(searchParams.get("page")),
  });

  return (
    <Wrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <aside className={s.container}>
          <p>Popular Tracks</p>
          <TracksList data={data} />
          <MyPagination totalPages={data?.tracks["@attr"].totalPages} />
        </aside>
      )}
    </Wrapper>
  );
};

export default TracksPage;
