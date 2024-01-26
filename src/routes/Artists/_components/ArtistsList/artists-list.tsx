import { TopArtistType, TopArtistsResponse } from "@/api/top-artists/types"
import s from "./styles.module.scss"
import { Link } from "react-router-dom"

interface ArtistsListProps {
    data?: TopArtistsResponse
}

export const ArtistsList = ({data}: ArtistsListProps) => {
    return(
        <div className={s.list}>{data?.artists.artist.map((el) => <ArtistItem key={el.name} item={el} />)}</div>
    )
}

interface ArtistItemProps {
    item: TopArtistType
}

const ArtistItem = ({item}: ArtistItemProps) => {
    return(
        <Link to={`/artist?name=${item.name}`}>
        <div className={s.item}>
            <img width={64} height={64} src={item.image.find(img => img.size === "medium")?.["#text"]}></img>
            <p>{item.name}</p>
        </div>
        </Link>
    )
}