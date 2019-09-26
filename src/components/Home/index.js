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
    }
    render() {
        return (
            <div id="home" ref={ this.home }>
            <Helmet>
                <title>Rities | Home </title>
            </Helmet>
                <HomeTitle title="Rities."></HomeTitle>
                <div className="heading">
                    <h1>All<ArrowIcon color="#FFF" width={35} height={35} rotate={-45}/></h1> 
                </div>
                <div className="all-artists">
                    <div className="wrapper">
                        { this.state.data.map((artistData, id) => {
                            // ARTIST DATA
                            return (
                                <Artist key={ id } data={ artistData } />
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;