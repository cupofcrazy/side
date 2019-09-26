import React from 'react';


const ArrowIcon = ({ color, width, height, rotate }) => {
    return (
       <span style={{ display: 'inline-block', padding: '0 50px', transform: `rotate(${rotate}deg)`}}>
            <svg xmlns="http://www.w3.org/2000/svg" width={ width } height={ height } viewBox="0 0 81 81">
                <g id="Icon_feather-arrow-down" data-name="Icon feather-arrow-down" transform="translate(0 0)">
                    <path id="Path_13" data-name="Path 13" d="M0,0V78" transform="translate(39 0)" fill="none" stroke={ color } strokeLinejoin="round" strokeWidth="5"/>
                    <path id="Path_14" data-name="Path 14" d="M78,0,39,39,0,0" transform="translate(0 39)" fill="none" stroke={ color } strokeWidth="5"/>
                </g>
            </svg>
       </span>
    );
};

export default ArrowIcon;