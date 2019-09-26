import React from 'react';


const MenuIcon = ({ color, width, height }) => {
    return (
       <>
            <svg xmlns="http://www.w3.org/2000/svg" width={ width } height={ height } viewBox="0 0 25.712 13.338">
                <g id="Icon_feather-menu" data-name="Icon feather-menu" transform="translate(-3.5 -8)">
                    <path id="Path_8" data-name="Path 8" d="M4.5,18H28.212" transform="translate(0 -3.331)" fill="none" stroke={ color } strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                    <path id="Path_9" data-name="Path 9" d="M4.5,9H28.212" fill="none" stroke={ color } strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                    <path id="Path_10" data-name="Path 10" d="M4.5,27H28.212" transform="translate(0 -6.662)" fill="none" stroke={ color } strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                </g>
            </svg>

       </>
    );
};

export default MenuIcon;