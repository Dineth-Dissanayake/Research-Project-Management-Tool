import React from 'react';
import DropZone from './DropZone';

const LandingPage = (props) => {
    
    return (
        <div> 
            <img className='banner' src='https://cdn.pixabay.com/photo/2017/06/01/22/42/chain-2364830__480.jpg' alt="A man giving a pitch to a captivated audience."/>
            <DropZone />
        </div>
    );
}

export default LandingPage