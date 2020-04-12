import React from 'react';
import { MDBIcon } from 'mdbreact';
import { state } from './types';
import { fn } from './util';

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
        <div >
            <div className="h-100 d-inline-block align-text-bottom">
                <div
                    style={style.card as any}
                >
                    <MDBIcon icon="adjust" /> <strong>{props.state.state}</strong> - {fn(props.state.case)} -
                </div>
            </div>
        </div >
    );

}

export default Card;