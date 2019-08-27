import React from 'react';
import { Player } from 'video-react';


const Vivid_VideoPlayer = (props) => {
    return (
        <Player
            fluid
            poster={props.logo}>
            <source src={DATA__[0].src} />
        </Player>
    )
}
export default Vivid_VideoPlayer;

const DATA__ =[
    {
        src:"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    }
]