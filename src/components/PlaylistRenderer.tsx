import React, { useState, useCallback } from "react"
import clsx from 'clsx'
import './PlaylistRenderer.css'
import {IconButton, LinearProgress, Typography} from '@material-ui/core'
import Up from '@material-ui/icons/ExpandLess'
import Down from '@material-ui/icons/ExpandMore'
import Player from './Player'
import VideoList from './VideoList'
import {VideoInfo} from '../types'
import PlaylistItem from "./PlaylistItem"

interface Props {
    playlistVideos: Array<VideoInfo>;
    currentIndex: number;
    onVideoEnd?: () => void;
    onVideoStart?: () => void;
    autoplay: boolean;
    setAutoplay: (on: boolean) => void;
    playVideo: (id: number) => void;
    onAdd: (videoId: string) => void;
}

const PlaylistRenderer = ({playlistVideos, currentIndex, onVideoEnd, onVideoStart, playVideo, onAdd, autoplay, setAutoplay}: Props) => {
    const [on, setOn] = useState<boolean>(false)

    const toggleExpand = useCallback(() => {
        setOn(!on)
    }, [on])

    return (
        currentIndex !== -1 ?
        <div className={clsx('playlist', {open: on})}>
            <div className='top-section'>
                <div className='player-container'>
                {currentIndex >= playlistVideos.length?
                    <LinearProgress/> :
                    <Player autoplay={autoplay} setAutoplay={setAutoplay} videoDetails={playlistVideos[currentIndex].videoDetails} onVideoEnd={onVideoEnd} onVideoStart={onVideoStart}/>}
                </div>
                <IconButton onClick={toggleExpand} color='secondary'>
                    {on ? <Down/> : <Up/>}
                </IconButton>
            </div>
            <div className='lists-container'>
            <div className={clsx({hide: !on}, 'list')}>
                {playlistVideos
                    .map((info, id) =>
                        <PlaylistItem key={`playlist${id}`} video={info.videoDetails} setVideo={() => playVideo(id)} playing={id === currentIndex}/>)}
            </div>
            <Typography className={clsx({hide: !on}, 'divider')} variant='h5' component='h5'>Suggested</Typography>
            {currentIndex < playlistVideos.length &&
                <VideoList className={clsx({hide: !on}, 'list')} videos={playlistVideos[currentIndex].related_videos} setVideo={onAdd}/>}
            </div>
        </div> : null
    )
}

export default PlaylistRenderer