import { createContext } from 'react'
import { Video } from '../types'

export const videoContext = createContext<{
    videos: Array<Video>,
    setVideos?: (video: Array<Video>) => void
}>({
    videos: []
})

export const playlistActionContext = createContext<{
    playVideo: (index: number) => void,
    addToPlaylist: (videoId: string) => void,
    addToPlaylistThenPlay: (videoId: string) => void
}>({
    playVideo: () => { },
    addToPlaylist: () => { },
    addToPlaylistThenPlay: () => { }
})

export const autoplayContext = createContext<{ autoplay: boolean, setAutoplay: (on: boolean) => void }>({
    autoplay: true,
    setAutoplay: () => { }
})

export const videoListenerContext = createContext<{ onVideoEnd: () => void, onVideoStart: () => void }>({
    onVideoEnd: () => { },
    onVideoStart: () => { },
})