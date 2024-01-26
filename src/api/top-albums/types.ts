export type TopAlbumsResponse = {
    albums: {
        "@attr": MetaDataType,
        album: TopAlbumType[]
    }
}

export type TopAlbumType = {
    image: Image[]
    name: string
}

type MetaDataType = {
    page: string
    perPage: string
    total: string
    totalPages: string
}

type Image = {
    "#text": string
    size: string
}

export type TagsResponseType = {
    tags: {
        tag: {
            name: string
        }[]
    }
}