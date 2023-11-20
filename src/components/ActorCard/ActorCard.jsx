import './ActorCard.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function ActorCard({ actors }){
    const actorDivs = actors.map((actor, index) => {
        const backgroundImage = `url(https://picsum.photos/400/300?random=${Date.now() + index})`;
        return(
            <>
            <div className="actor-tile"
                style={{
                    backgroundImage: backgroundImage,
                    backgroundSize: 'cover'
                }}>
                    <div className="actor-name">{actor}</div></div>
            </>
        )
    })
    
    return (
        <>
            {actorDivs}
        </>
    )
}

export default ActorCard