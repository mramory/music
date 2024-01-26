export type TopTracksResponse = {
    tracks: {
        "@attr": MetaDataType,
        track: TopTrackType[]
    }
}

export type TopTrackType = {
    artist: ArtistType
    duration: string
    image: Image[]
    listeners: string
    mbid: string
    name: string
    playcount: string
    url: string
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

type ArtistType = {
    mbid: string
    name: string
    url: string
}