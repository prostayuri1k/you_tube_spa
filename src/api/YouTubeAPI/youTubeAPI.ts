import axios, {AxiosResponse} from "axios";
import {getApiKey} from "../../helpers/helpers";

const instance = axios.create({
    baseURL: ' https://www.googleapis.com/youtube/v3',
});

export type Items = {
    id: {
        videoId: string;
    },
    snippet: {
        title: string,
        description: string,
        thumbnails: {
            medium: {
                url: string
            }
            high: {
                url: string,
            }
        }
    },
}

export type YouTubeAPIData = {
    items: Items[];
    pageInfo: {
        totalResults: number
    };
    nextPageToken: string;
}


instance.interceptors.response.use((response: AxiosResponse<YouTubeAPIData>) => {
    return {
        ...response,
        data:
            {
                items: response.data.items.map((item: Items) => {
                    return {
                        id: item.id.videoId,
                        title: item.snippet.title,
                        description: item.snippet.description,
                        image: {
                            medium: item.snippet.thumbnails.medium.url,
                            high: item.snippet.thumbnails.high.url
                        }
                    }
                }),
                totalResults: response.data.pageInfo.totalResults,
                nextPageToken: response.data.nextPageToken
            }
    };
})

export const youTubeAPI = {
    searchVideos(data: string, pageToken?: string) {
        return instance.get('search', {
            params: {
                part: 'snippet',
                q: data,
                type: 'video',
                maxResults: 12,
                pageToken: pageToken,
                key: getApiKey()
            }
        });
    }
}