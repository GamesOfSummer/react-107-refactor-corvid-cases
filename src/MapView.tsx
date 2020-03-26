import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardText, MDBCardHeader } from "mdbreact";
import { state } from './types';

export interface MapProps { state: state }
export interface MapState { state: state }

export default class MapView extends Component<MapProps, MapState> {

    render() {
        let state = this.props.state;

        return (
            <div >
                <MDBCard>
                    <div style={{ height: '300px', width: '100w' }}>

                    </div>
                    <MDBCardHeader color="lighten-1" style={{ backgroundColor: "#34b379" }}>
                        {state.state}
                        <br />
                        {state.case}

                    </MDBCardHeader>
                    <MDBCardBody style={{ paddingLeft: "16px" }}>
                        <MDBCardText >
                            {/* {restaurant.location.address} <br />
                            {restaurant.location.city}, {restaurant.location.state} {restaurant.location.postalCode}
                            <br /><br />
                            {(restaurant.contact !== null) ? restaurant.contact.formattedPhone : ''}
                            <br></br>
                            @ {(restaurant.contact !== null) ? restaurant.contact.twitter : ''} */}
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </div >
        )
    }

}