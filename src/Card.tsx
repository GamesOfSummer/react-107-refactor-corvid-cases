import React, { Component } from 'react';
import { restaurant } from './types';

interface CardProps { restaurant: restaurant; }

export default class Card extends Component<CardProps>{

    style = {
        image: {
            position: 'relative',
            height: '180px',
            backgroundImage: 'url(' + this.props.restaurant.backgroundImageURL + ')',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            MozBoxShadow: 'inset 0 -10px 50px #000000',
            WebkitBoxShadow: 'inset 0 -10px 50px #000000',
            boxShadow: 'inset 0 -10px 50px #000000',
        },
        card: {
            fontSize: 16,
            position: 'absolute',
            bottom: 0,
            left: 16,
            textAlign: 'left'
        }
    };

    render() {
        return (
            <div className=" white-text"
                style={this.style.image as any}>
                <div className="h-100 d-inline-block align-text-bottom">
                    <div
                        className="white-text"
                        style={this.style.card as any}>
                        <strong>{this.props.restaurant.name}</strong><br />
                        {this.props.restaurant.category}
                    </div>
                </div>
            </div >
        );
    }
}