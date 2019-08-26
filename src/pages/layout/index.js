import React from 'react';
import Card from '../../components/card'

import './style.scss';

const plans = require('../../plans.json');

const Layout = () => (
    <section className='layout'>
        <h1>Layout</h1>
        <div className='cards'>
            {
                plans.map(p => {
                    return <Card plan={p}/>
                })
            }
        </div>
    </section>
);

export default Layout;