import React from "react";

import './style.scss';


const Card = ({plan}) => (
    <div class="card-item">
        <div class="card-header">
            <p>Wooza</p>
            <h2>{plan.internet}</h2>
        </div>
        <div class="card-content">
            <div class="row-benefit">
                <p>Traga seu número para Wooza</p>
                <h4><strong>2</strong> de internet</h4>
            </div>
            <div class="price">
                <span class="currency">R$</span>
                <span class="big-price">{plan.price.real}</span>
                <div class="wrap">
                    <span class="cents">,{plan.price.cents}</span>
                    <span class="month">/Mês</span>
                </div>
            </div>
        </div>
        <div class="card-footer"></div>
    </div>
);

export default Card;