import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBNavbar, MDBNavbarBrand } from "mdbreact";
import RestaurantList from './RestaurantList';
import { restaurant, defaultResturant } from './types';

export interface AppProps { restaurants: [restaurant]; }
export interface AppState { restaurants: [restaurant]; }

class App extends Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);
    this.state = { restaurants: [defaultResturant()] };
  }

  componentDidMount() {
    fetch(
      'https://s3.amazonaws.com/br-codingexams/restaurants.json'
    )
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        this.setState({ restaurants: data.restaurants });
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
                  <strong>Lunch Tyme</strong>
                </MDBNavbarBrand>
              </MDBNavbar>
              <RestaurantList restaurants={this.state.restaurants} />
            </MDBCol>
            <MDBCol md="1"></MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default App;
