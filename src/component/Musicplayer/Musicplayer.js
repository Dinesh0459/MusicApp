import React, {useState} from 'react'
import './Musicplayer.css'
import Heading from '../Heading/Heading'
import Album from '../Albums/Album'
import Player from '../playermenu/playermenu';
export default function Musicplayer()
{

    const [song, setsong] = useState("../../music/1.mp3")
    return (
        <div className = 'main'>
            <Heading/>
            <Album setsong = {(song)=>setsong(song)}/>
            <Player song = {song}/>
        </div>
    )
}
