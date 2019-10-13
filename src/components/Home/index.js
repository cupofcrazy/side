import React, { Component } from 'react';
import LocomotiveScroll from 'locomotive-scroll'
import Helmet from 'react-helmet'
import './Home.scss'
import Artist from '../Artist';
import ArrowIcon from '../svg/ArrowIcon';
import HomeTitle from '../HomeTitle';
import data from '../../assets/content/data'


class Home extends Component {
    constructor(props) {
        super(props)
        this.home = React.createRef()
        this.sliderRef = React.createRef()
        this.state = {
            data: data
        }
        
    }
    
    componentDidMount() {
        // this.home = React.createRef()
        this.setState({
            data: data
        })
        console.log(this.state.data)
        this.scroll = new LocomotiveScroll({
            el: this.home.current,
            smooth: true,
            smoothMobile: true
        })
        
        console.log(this.state.data.length)
    }
    componentWillUnmount() {
        // this.scroll.destroy()
        // console.log('unmounted')
    }
    render() {
        return (
            <div id="home" ref={ this.home }>
            <Helmet>
                <title>Rities | Home </title>
            </Helmet>
                <HomeTitle title="MXMCIV"></HomeTitle>
                <div className="heading">
                    <h1>Artists.</h1> 
                </div>
                <div className="all-artists">
                    <div className="slider" ref={() => this.sliderRef }>
                        <div className="slider-container">
                            { this.state.data.map((artistData, id) => {
                                // ARTIST DATA
                                return (
                                    <Artist key={ id } data={ artistData } />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="drag">Drag to Explore</div>
            </div>
        );
    }
}

export default Home;