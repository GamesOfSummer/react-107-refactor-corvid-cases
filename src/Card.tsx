import React, { Component } from 'react';
import { MDBIcon } from "mdbreact";
import { state } from './types';

interface CardProps { state: state; }

export default class Card extends Component<CardProps>{

    style = {
        card: {
            fontSize: 16,  
            bottom: 0,
            left: 16,
            textAlign: 'left'
        }
    };

    render() {
        return (
            <div
           >
                <div className="h-100 d-inline-block align-text-bottom">
                    <div
                        style={this.style.card as any}>
                        <strong>{this.props.state.state}</strong><br />
                        {this.props.state.case}
                        {' '} <MDBIcon icon="adjust" />
                    </div>
                </div>
            </div >
        );
    }
}