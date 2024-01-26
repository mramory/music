import s from "./styles.module.scss"
import { TopTrackType, TopTracksResponse } from "@/api/top-tracks/types"

interface ArtistsListProps {
    data?: TopTracksResponse
}

export const TracksList = ({data}: ArtistsListProps) => {
    return(
        <div className={s.list}>{data?.tracks.track.map((el) => <TrackItem key={el.name} item={el} />)}</div>
    )
}

interface ArtistItemProps {
    item: TopTrackType
}

const TrackItem = ({item}: ArtistItemProps) => {
    return(
        <div className={s.item}>
            <img width={64} height={64} src={item.image.find(img => img.size === "medium")?.["#text"]}></img>
            <p>{item.name}</p>
        </div>
    )
}