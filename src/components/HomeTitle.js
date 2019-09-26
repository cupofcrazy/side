import React from 'react';

const HomeTitle = ({ title}) => {
    const h1styles = {
        fontFamily: 'Recoleta Alt, serif',
        textAlign: 'center',
        fontSize: '20vw',
        color: '#FF0000'
    }
    const h4styles = {
        fontFamily: 'Faktum, sans-serif',
        fontWeight: '100',
        textAlign: 'center',
        fontSize: '.7rem',
        textTransform: 'uppercase',
        margin: '0 auto',
        // textDecoration: 'underline',
        color: '#FFFFFF',
        padding: '10px 20px',
        border: '1px solid #FFFFFF',
        // display: 'inline-block',
        borderRadius: '50%'
    }
    return (
        <div data-scroll data-scroll-speed="2" style={{ margin: 'auto', width: 'fit-content'}}>
            <h1 style={ h1styles }>{ title }</h1>
            <div>
                <h4 style={ h4styles }>A Mini Site for Various Artists</h4>
            </div>
        </div>
    );
};

export default HomeTitle;