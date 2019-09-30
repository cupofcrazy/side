import React, { Component } from 'react';
import LocomotiveScroll from 'locomotive-scroll'
import Helmet from 'react-helmet'
import './ArtistPage.scss'

class ArtistPage extends Component {
    constructor(props) {
        super(props)
        this.artistPage = React.createRef()
    }
    componentDidMount() {
        window.scrollTo(0, 0)
        this.scroll = new LocomotiveScroll({
            el: this.artistPage.current,
            smooth: true,
            smoothMobile: true
        })
    }
    componentWillUnmount() {
        this.scroll.destroy();
    }
    
    render() {
        const { match } = this.props
        const artistData = this.props.data.find(a => a.slug === match.params.id)
        const artistName = `${ artistData.caption[0] } ${artistData.caption[1]}`

        const {
            id, caption, imgSrc, content
        } = artistData
        return (
            <div className="artist-page" ref={ this.artistPage }>

            <Helmet>
                <title>Artist | { artistName }</title>
            </Helmet>

            <div className="background-text" data-scroll data-scroll-speed="1" data-scroll-direction="horizontal">{ caption[0] }</div>
                <h1 className="artist-name" >
                    <div>{ caption[0] }</div>
                    <div>{ caption[1] }</div>
                </h1>
                <p className="artist-caption">{ content }</p>
                <img className="artist-image" src={ require(`../../assets/images/${imgSrc}`)} alt={ caption.join(" ") } />
                <p className="artist-caption">{ content }</p>
                <p className="artist-caption">{ content }</p>
                <p className="artist-caption">{ content }</p>
            </div>
        );
    }
}

export default ArtistPage;