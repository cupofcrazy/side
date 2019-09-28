import React, { Component } from 'react';
import './ArtistPage.scss'

class ArtistPage extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        const { match } = this.props
        const artistData = this.props.data.find(a => a.slug === match.params.id)

        const {
            id, caption, imgSrc, content
        } = artistData
        return (
            <div className="artist-page">
            <div className="background-text">{ caption[0] }</div>
                <h1 className="artist-name">
                    <div>{ caption[0] }</div>
                    <div>{ caption[1] }</div>
                </h1>
                <p className="artist-caption">{ content }</p>
                <img className="artist-image" src={ require(`../../assets/images/${imgSrc}`)} alt={ caption.join(" ") } />
            </div>
        );
    }
}

export default ArtistPage;