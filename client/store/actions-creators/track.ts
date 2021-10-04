import {Dispatch} from "react";
import {TrackAction, TrackActionTypes} from "../../types/tracks";
import axios from "axios";

export const fetchTracks = () => {
    return async (dispatch: Dispatch<TrackAction>) => {
        try {
            const response = await axios.get('http://192.168.1.66:5000/tracks')
            dispatch({type: TrackActionTypes.FETCH_TRACKS, payload: response.data})
        } catch (e) {
            dispatch({type: TrackActionTypes.FETCH_TRACKS_ERROR, payload: 'Track list loading error'})
        }
    }
}