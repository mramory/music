import instance from ".."
import { TopTracksResponse } from "./types"

export const topTracksService = {
    async getTopTracks(page: string | null = "1") {
        const response = await instance.get<TopTracksResponse>("", { params: { method: "chart.gettoptracks", page } })
        return response.data
    },
}