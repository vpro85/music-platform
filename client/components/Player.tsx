import React from 'react';
import {Grid, IconButton} from "@material-ui/core";
import {Pause, PlayArrow, VolumeUp} from "@mui/icons-material";
import {ITrack} from "../types/tracks";
import styles from '../styles/Player.module.scss'
import TrackProgress from "./TrackProgress";

const Player = () => {
    const active = false
    const track: ITrack = {
        _id: '1',
        artist: 'IF',
        text: 'Something to sing...',
        name: 'Track 1',
        // comments: [],
        listens: 0,
        audio: 'http://192.168.1.13:5000/audio/5a84022e-d330-4447-815a-ac2710b71fc9.mp3',
        picture: 'http://192.168.1.13:5000/image/e3be65d1-31a6-4586-980b-966bcc019336.jpg',
        comments:[
            {_id: '1', username: "Vadim", text: "Very good!"},
            {_id: '2', username: "Vad", text: "Not bad.."}
        ]
    }
    return (
        <div className={styles.player}>
            <IconButton onClick={e => e.stopPropagation()}>
                {active ? <Pause/> : <PlayArrow/>}
            </IconButton>
            <Grid container direction={"column"} style={{width: 200, margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{fontSize: 12, color: "gray"}}>{track.artist}</div>
            </Grid>
            <TrackProgress left={0} right={100} onChange={()=>({})}/>
            <VolumeUp style={{marginLeft: 'auto'}}/>
            <TrackProgress left={0} right={100} onChange={()=>({})}/>
        </div>
    );
};

export default Player;