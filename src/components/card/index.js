import React from "react";

import './style.scss';


const Card = ({plan}) => (
    <div className="card-item">
        <div className="card-header">
            <p className="featured-tag">Wooza</p>
            <h2 className="featured-plan">{plan.internet}</h2>
        </div>

        <div className="card-content">
            <div className="row-benefit">
                <p>Bônus de débito automático</p>
                <h4><strong>2GB</strong> de internet</h4>
            </div>
            <div className="row-benefit">
                <p>Bônus de Portabilidade</p>
                <h4><strong>1GB</strong> de internet</h4>
            </div>
            <div className="price">
                <span className="currency">R$</span>
                <span className="big-price">{plan.price.real}</span>
                <div className="wrap">
                    <span className="cents">,{plan.price.cents}</span>
                    <span className="month">/Mês</span>
                </div>
            </div>
        </div>

        <div className="buy-button-wrap">
            <button className="buy-button"> Comprar</button>
        </div>
        <div className="card-footer">
            <div className="row-featured-benefit">
                <p>Ligações <strong>Ilimitadas</strong></p>
            </div>
            <div className="row-featured-benefit">
                <p>Apps ilimitados</p>
                <ul>
                    <li><i className="icon icon-whatsapp"></i></li>
                    <li><i className="icon icon-instagram"></i></li>
                    <li><i className="icon icon-twitter"></i></li>
                    <li><i className="icon icon-facebook"></i></li>
                </ul>
            </div>
        </div>
    </div>
);

export default Card;