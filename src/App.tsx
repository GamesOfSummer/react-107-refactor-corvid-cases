import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBNavbar, MDBNavbarBrand } from "mdbreact";
import StateList from './StateList';
import { state, defaultState } from './types';

export interface AppProps { states: [state]; }
export interface AppState { states: [state]; }

class App extends Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);
    this.state = { states: [defaultState()] };
  }

  componentDidMount() {
    fetch(
      'https://finnhub.io/api/v1/covid19/us?token=bpuf3qvrh5rbbhoiii40'
    )
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        this.setState({ states: data });
      })
      .catch(error => {
        console.log('Error occured on load.' + error);
      });
  }

  render() {
    return (
      <div className="App">
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol md="1"></MDBCol>
            <MDBCol md="10">
              <MDBNavbar className="white-text" style={{ position: 'relative', height: '50px', backgroundColor: "#43e895" }}>
                <MDBNavbarBrand style={{ position: 'absolute', left: '45%' }}>
                  <strong>Corvid Numbers</strong>
                </MDBNavbarBrand>
              </MDBNavbar>
              <StateList states={this.state.states} />
            </MDBCol>
            <MDBCol md="1"></MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default App;
