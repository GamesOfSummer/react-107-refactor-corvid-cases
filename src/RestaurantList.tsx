import React, { Component } from 'react';
import Card from './Card';
import { MDBRow, MDBCol } from "mdbreact";
import { defaultResturant, restaurant } from './types';
import MapView from './MapView';

export interface RestaurantListProps { restaurants: [restaurant]; }
export interface RestaurantListState { value: Number | null, restaurant: restaurant }

export default class RestaurantList extends Component<RestaurantListProps, RestaurantListState> {

    constructor(props: any) {
        super(props);
        this.state = {
            value: null,
            restaurant: defaultResturant()
        };
    }

    setResturant = (e: any) => {
        const { id } = e.currentTarget;
        this.setState({ value: id, restaurant: this.selectedResturant(id) });
    }

    selectedResturant = (id: any) => {
        if (this.state !== null && !!id) {
            return (id >= 0) ? this.props.restaurants[id] : defaultResturant();
        }
        return defaultResturant();
    }

    hasASelectedResturant = () => {
        if (this.state === null || this.state.value === null) {
            return false;
        }
        return true;
    }



    //https://www.c-sharpcorner.com/blogs/generate-guid-using-javascript1
    createGuid() {
        function S4() {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
        return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
    }

    render() {
        let divNumberLeft = "12";
        let divNumberRight = "0";

        if (this.hasASelectedResturant()) {
            divNumberLeft = "6";
            divNumberRight = "6";
        }

        return (
            <div >
                <MDBRow>
                    <MDBCol md={divNumberLeft as any}>
                        {this.props.restaurants.map((item, index) => {
                            return <div key={this.createGuid()} id={index.toString()} onClick={this.setResturant}>
                                <Card restaurant={item} />
                            </div>;
                        })}
                    </MDBCol>
                    <MDBCol md={divNumberRight as any} className="pl-0">
                        <MapView restaurant={this.state.restaurant} />
                    </MDBCol>
                </MDBRow>
            </div >
        )
    }
}
