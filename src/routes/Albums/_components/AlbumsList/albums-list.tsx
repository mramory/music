import s from "./styles.module.scss"
import { TopAlbumType, TopAlbumsResponse } from "@/api/top-albums/types"

interface ArtistsListProps {
    data?: TopAlbumsResponse
}

export const AlbumsList = ({data}: ArtistsListProps) => {
    return(
        <div className={s.list}>{data?.albums.album.map((el) => <AlbumItem key={el.name} item={el} />)}</div>
    )
}

interface ArtistItemProps {
    item: TopAlbumType
}

const AlbumItem = ({item}: ArtistItemProps) => {
    return(
        <div className={s.item}>
            <img width={64} height={64} src={item.image.find(img => img.size === "medium")?.["#text"]}></img>
            <p>{item.name}</p>
        </div>
    )
}