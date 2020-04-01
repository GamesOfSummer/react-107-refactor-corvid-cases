import React, { useState } from 'react';
import Card from './Card';
import { MDBRow, MDBCol } from "mdbreact";
import { defaultState, state } from './types';
import DetailView from './DetailView';
import PropTypes from 'prop-types';

export interface RestaurantListProps { states: [state]; }

const StateList = (props: RestaurantListProps) => {
    const [currentState, setState] = useState(defaultState());

    let setActiveState = (e: any) => {
        const { id } = e.currentTarget;
        setState(props.states[id]);
    }

    let hasASelectedResturant = (): boolean => {
        if (currentState === defaultState()) {
            return false;
        }
        return true;
    }

    //https://www.c-sharpcorner.com/blogs/generate-guid-using-javascript1
    let createGuid = () => {
        function S4() {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
        return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
    }


    let divNumberLeft = "12";
    let divNumberRight = "0";

    if (hasASelectedResturant()) {
        divNumberLeft = "4";
        divNumberRight = "8";
    }

    return (
        <div >
            <MDBRow>
                <MDBCol md={divNumberLeft as any}>
                    {props.states.map((item, index) => {
                        return <div key={createGuid()} id={index.toString()} onClick={setActiveState}>
                            <Card state={item} />
                        </div>;
                    })}
                </MDBCol>
                <MDBCol md={divNumberRight as any} className="pl-0">
                    <DetailView {...currentState} />
                </MDBCol>
            </MDBRow>
        </div >
    )
}


StateList.propTypes = { props: PropTypes.object, state: PropTypes.object };
export default StateList;
