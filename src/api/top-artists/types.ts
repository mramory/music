export type TopArtistsResponse = {
    artists: {
        "@attr": MetaDataType,
        artist: TopArtistType[]
    }
}

export type TopArtistType = {
    image: Image[]
    listeners: string
    mbid: string
    name: string
    playcount: string
    streamable: string
    url: string
}

export type ArtistResponse = {
    artist: ArtistType
}

type ArtistType = Omit<TopArtistType, "listeners" | "mbid" | "playcount"> & {
    bio: BiographyType,
    ontour: string,
    similar: { artist: PreviewArtist[] },
    stats: {
        listeners: string
        playcount: string
    }
}

type PreviewArtist = {
    image: Image[],
    name: string,
    url: string
}

type BiographyType = {
    content: string
    published: string
    summary: string
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