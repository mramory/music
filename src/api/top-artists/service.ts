import instance from ".."
import { ArtistResponse, TopArtistsResponse } from "./types"

export const topArtistsService = {
    async getTopArtists(page: string | null = "1") {
        const response = await instance.get<TopArtistsResponse>("", { params: { method: "chart.gettopartists", page } })
        return response.data
    },
    async getArtist(name: string | null) {
        const response = await instance.get<ArtistResponse>("", { params: { method: "artist.getinfo", artist: name } })
        return response.data
    },
}