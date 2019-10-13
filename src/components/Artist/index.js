import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Artist.scss'

const Artist = (props) => {
    
    const { id, slug, caption, imgSrc, content } = props.data
    return (
        <Link to={`artists/${slug}`}>
            <div className="artist">
                <div className="artist-image-container">
                    <img src={ require(`../../assets/images/${ imgSrc }`)} width="110%" alt={ caption.join(" ")}></img> 
                </div>
                <div className="artist-info">
                    <div className="artist-name"><h1>{ caption[0] }  {caption[1] }</h1></div>
                    <div className="artist-caption">Artist</div>
                </div>
            </div>
        </Link>
    );   
}


Artist.propTypes = {
    id: PropTypes.string
}

export default Artist;