import React from 'react';
import { MDBCard, MDBCardBody, MDBCardText, MDBCardHeader } from "mdbreact";
import { defaultState } from './types';
import PropTypes from 'prop-types';

export interface DetailProps { state: string, death: number, case: number, updated: string }

function Details(props : any) : any {
    const death = props.props.death;
    console.log('death', props);

    if (death !== 0) {    
        return <div>
            <span> Deaths - {props.props.death} </span><br/>
            <span>  Last Updated - {props.props.updated} </span>
        </div>
   }

   return '';
}

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
                            <div> <Details props={props}/></div>
                           
                        
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