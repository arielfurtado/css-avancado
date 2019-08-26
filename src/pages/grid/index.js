import React from 'react';

import Card from '../../components/card';

import './style.scss';

const plans = require('../../plans.json');

const Grid = () => (
    <section className='grid'>
        <h1>Grid Layout</h1>
        <div className='cards'>
            {
                plans.map(p => {
                    return (<Card plan={p}/>)
                })
            }
        </div>
    </section>
);

export default Grid;