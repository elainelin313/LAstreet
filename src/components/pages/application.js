import React from 'react';
import './application.css'
import Navbar from '../navbar';
import Chart from './chart';
import { Button } from '../button';
import Map from './map';
import Dropdown from './dropdown';

function Application () {
    return (
        <div className='application'>
            <div className='intro'>
                <h1>Hillside Street Prioritization Application</h1>
            </div>
            {/* <div className='buttons'>
                <div className='setting'></div>
                <div className='setting'></div>
                <div className='setting'></div>
                <div className='setting'></div>
                <div className='settingå'></div>
                <div className='setting'></div>
            </div> */}
            {/* <Dropdown/> */}
            <div className='charts'>
                <Chart/>
                <Map/>
            </div>
        </div>
    );
}

export default Application;