import React from 'react';
import { MDBCard, MDBCardBody, MDBCardText, MDBCardHeader } from "mdbreact";
import { state, defaultState } from './types';
import PropTypes from 'prop-types';

export interface DetailProps { state: string, death: number, case: number }


const DetailView = (props: DetailProps) => 
{
    return (
            <div >
                <MDBCard>
                    <div style={{ height: '300px', width: '100w' }}>

                    </div>
                    <MDBCardHeader color="lighten-1" style={{ backgroundColor: "#34b379" }}>
                         {props.state}
                        <br />


                    </MDBCardHeader>
                    <MDBCardBody style={{ paddingLeft: "16px" }}>
                        <MDBCardText >
                        Deaths - {props.death} <br />
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
DetailView.propTypes = { props: PropTypes.object };
DetailView.defaultProps = {
    props: defaultState()
  };
export default DetailView;