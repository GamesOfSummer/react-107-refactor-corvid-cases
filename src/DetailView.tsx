import React from 'react';
import { MDBCard, MDBCardBody, MDBCardText, MDBCardHeader } from "mdbreact";
import { defaultState } from './types';
import PropTypes from 'prop-types';
import { fn, fd } from './util'

export interface DetailProps { state: string, death: number, case: number, updated: string }

function Details(props: any): any {
  const death = props.props.death;

  if (death !== 0) {
    return (
            <React.Fragment>
                <span> Cases - {fn(props.props.case)} </span><br />
                <span> Deaths - {fn(props.props.death)} </span><br />
                <span> Last Updated - {fd(props.props.updated)} </span>
            </React.Fragment>
    );
  }

  return '';
}

const DetailView = (props: DetailProps) => {
  return (
        <div >
            <MDBCard>
                <div >
                </div>
                <MDBCardHeader color="lighten-1" style={{ backgroundColor: "#34b379" }}>
                    {props.state}
                </MDBCardHeader>
                <MDBCardBody style={{ paddingLeft: "16px" }}>
                    <MDBCardText >
                        <Details props={props} />
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