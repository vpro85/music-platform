import React from 'react';

interface ITrackProgressProps {
    left: number;
    right: number;
    onChange: (e) => void;
}

const TrackProgress: React.FC<ITrackProgressProps> = ({left, right, onChange}) => {
    return (
        <div style={{display: 'flex'}}>
            <input type="range" min={0} max={right} value={left} onChange={onChange}/>
            {left} / {right}
        </div>
    );
};

export default TrackProgress;