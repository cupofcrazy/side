import React, { Component } from 'react';
import './ArtistPage.scss'

class ArtistPage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { match } = this.props
        const artistData = this.props.data.find(a => a.slug === match.params.id)

        const {
            id, caption, imgSrc, content
        } = artistData
        return (
            <div>
                <h1>{ caption.join(" ")}</h1>
                <p>{ content }</p>
            </div>
        );
    }
}

export default ArtistPage;