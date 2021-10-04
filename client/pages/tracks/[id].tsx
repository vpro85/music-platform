import React, {useState} from 'react';
import {ITrack} from "../../types/tracks";
import MainLayout from "../../layouts/MainLayout";
import {Button, Grid, TextField} from "@material-ui/core";
import {useRouter} from "next/router";
import {GetServerSideProps} from "next";
import axios from "axios";

const TrackPage = ({serverTrack}) => {
    const [track, setTrack] = useState(serverTrack)
    const router = useRouter()

    return (
        <MainLayout>
            <Button
                variant={"outlined"}
                style={{fontSize: 32}}
                onClick={() => router.push('/tracks')}>
                To track list
            </Button>
            <Grid container style={{margin: '20px 0'}}>
                <img src={'http://192.168.1.66:5000/' + track.picture} alt={track.name} width={200} height={200}/>
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
export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const response = await axios.get('http://192.168.1.66:5000/tracks/' + params.id)
    return {
        props: {
            serverTrack: response.data
        }
    }
}