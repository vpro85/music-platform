import React from 'react';
import {ITrack} from "../../types/tracks";
import MainLayout from "../../layouts/MainLayout";
import {Button, Grid, TextField} from "@material-ui/core";
import {useRouter} from "next/router";

const TrackPage = () => {
    const router = useRouter()
    const track: ITrack = {
        _id: '1',
        artist: 'IF',
        text: 'Something to sing...',
        name: 'Track 1',
        comments: [],
        listens: 0,
        audio: 'http://192.168.1.66:5000/audio/5a84022e-d330-4447-815a-ac2710b71fc9.mp3',
        picture: 'http://192.168.1.66:5000/image/e3be65d1-31a6-4586-980b-966bcc019336.jpg',

    }
    return (
        <MainLayout>
            <Button
                variant={"outlined"}
                style={{fontSize: 32}}
                onClick={() => router.push('/tracks')}>
                To track list
            </Button>
            <Grid container style={{margin: '20px 0'}}>
                <img src={track.picture} alt={track.name} width={200} height={200}/>
                <div style={{marginLeft: 30}}>
                    <h1>Title: {track.name}</h1>
                    <h1>Artist: {track.artist}</h1>
                    <h1>Listens: {track.listens}</h1>
                </div>
            </Grid>
            <h1>Lyrics:</h1>
            <p>{track.text}</p>
            <h1>Comments: </h1>
            <Grid container>
                <TextField label={"Your name..."} fullWidth/>
                <TextField label={"Your comment..."} fullWidth multiline rows={4}/>
                <Button variant={"outlined"}>Post</Button>
            </Grid>
            <div>{track.comments.map(comment =>
                <div>
                    <hr/>
                    <div>Name: {comment.username}</div>
                    <div>Comment: {comment.text}</div>
                </div>
            )}</div>
        </MainLayout>
    );
};

export default TrackPage;