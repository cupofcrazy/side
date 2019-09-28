import React, { Component } from 'react';
import Helmet from 'react-helmet'

class About extends Component {
    render() {
        return (
            <>
            <Helmet>
                <title>About</title>
            </Helmet>
            <div id="about">

                <div className="flex wrapper">
                    <div className="flex-left"></div>
                    <div className="flex-right"></div>
                </div>
            </div>
            </>
        );
    }
}

export default About;