import React from 'react';

const HomeTitle = ({ title}) => {
    const h1styles = {
        fontFamily: 'GrandSlam Roman, serif',
        fontWeight: '100',
        textAlign: 'center',
        fontSize: '20vw',
        color: '#555',
        // textTransform: 'uppercase'
    }
    const h4styles = {
        fontFamily: 'Faktum, sans-serif',
        display: 'inline-block',
        fontWeight: '100',
        textAlign: 'center',
        fontSize: '.7rem',
        textTransform: 'uppercase',
        margin: '0 auto',
        // textDecoration: 'underline',
        color: '#111',
        padding: '10px 20px',
        border: '1px solid #111',
        // display: 'inline-block',
        borderRadius: '50%'
    }
    return (
        <div data-scroll data-scroll-speed="2" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <h1 style={ h1styles }>{ title }</h1>
            <div>
                <h4 style={ h4styles }>A Mini Site for Various Artists</h4>
            </div>
        </div>
    );
};

export default HomeTitle;