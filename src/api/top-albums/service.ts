import instance from ".."
import { TopAlbumsResponse } from "./types"

export const topAlbumsService = {
    async getTopAlbums(tag: string) {
        const response = await instance.get<TopAlbumsResponse>("", { params: { method: "tag.gettopalbums", tag, limit: 20} })
        return response.data
    },
}