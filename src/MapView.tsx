import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardText, MDBCardHeader } from "mdbreact";
import { restaurant } from './types';
import GoogleMapReact from 'google-map-react';

export interface MapProps { restaurant: restaurant }
export interface MapState { restaurant: restaurant }

export default class MapView extends Component<MapProps, MapState> {

    render() {
        let restaurant = this.props.restaurant;

        return (
            <div >
                <MDBCard>
                    <div style={{ height: '300px', width: '100w' }}>

                    </div>
                    <MDBCardHeader color="lighten-1" style={{ backgroundColor: "#34b379" }}>
                        {restaurant.name}
                        <br />
                        {restaurant.category}

                    </MDBCardHeader>
                    <MDBCardBody style={{ paddingLeft: "16px" }}>
                        <MDBCardText >
                            {restaurant.location.address} <br />
                            {restaurant.location.city}, {restaurant.location.state} {restaurant.location.postalCode}
                            <br /><br />
                            {(restaurant.contact !== null) ? restaurant.contact.formattedPhone : ''}
                            <br></br>
                            @ {(restaurant.contact !== null) ? restaurant.contact.twitter : ''}
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </div >
        )
    }

}