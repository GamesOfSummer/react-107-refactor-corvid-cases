import React, { Component } from 'react';
import { MDBIcon } from "mdbreact";
import { state } from './types';

interface CardProps { state: state; }

const Card = (props: CardProps) => {

    const style = {
        card: {
            fontSize: 16,
            bottom: 0,
            left: 16,
            textAlign: 'left'
        }
    };

    return (
        <div
        >
            <div className="h-100 d-inline-block align-text-bottom">
                <div
                    style={style.card as any}>
                    <strong>{props.state.state}</strong><br />
                    {props.state.case}
                    {' '} <MDBIcon icon="adjust" />
                </div>
            </div>
        </div >
    );

}

export default Card;