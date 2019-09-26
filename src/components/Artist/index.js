import React from 'react';
import { Link } from 'react-router-dom'
import './Artist.scss'

const Artist = (props) => {
    const { id, slug, caption, imgSrc, content } = props.data
    return (
        <Link to={`artists/${ slug }`}>
            <div className="artist">
                <div className="artist-name"><h1>{ caption[0] }<br/> { caption[1] }</h1></div>
                
                <div className="artist-image-container">
                    <div className="artist-index">{ id }</div>
                    <div className="artist-image">
                        <img width="120%" src={ require(`../../assets/images/${imgSrc}`)} alt={ caption.join(" ")}></img>
                        <div className="view-artist-btn">
                            <span>View</span>
                        </div>
                    </div>
                    <div className="artist-caption">Artist</div>
                </div>
                
                
            </div>
        </Link>
    );
    
}

export default Artist;