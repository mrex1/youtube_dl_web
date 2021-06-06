import React from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

interface Props{
    src: string;
}

const Player = ({src}: Props) => {
    return (
        <AudioPlayer
        src={src}
        style={{position: 'fixed', bottom: 0, width: '100%'}}/>
    )
}

export default Player