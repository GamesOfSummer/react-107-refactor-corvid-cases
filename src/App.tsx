import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  MDBCol, MDBContainer, MDBRow, MDBNavbar, MDBNavbarBrand,
} from 'mdbreact';

import { state, defaultState } from './types';
import DetailView from './DetailView';
import Card from './Card';
import { fn } from './util';

import { addNewTask } from './redux/actions/actions';
import fetchAPIData from './fetchAPIData';

export interface AppState { states: [state]; }

const App = () => {

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [currentTotal, setTotal] = useState(0);
  const [currentDeath, setDeath] = useState(0);

useEffect(() => {
  const fetchData = async () => {
    const result = fetch(
      'https://finnhub.io/api/v1/covid19/us?token=bq2ft1nrh5rb332ppnug',
    )
      .then((resp) => resp.json())
      .then((data) => {
        const sortedData = data.sort((a: state, b: state) => b.case - a.case);
        const data2 = sortedData.map((x: state) => ({
          index: x.index,
          state: x.state,
          case: x.case,
          death: x.death,
          updated: x.updated.toString(),
        }));
  


        const total = sortedData.reduce((a: number, b: state) => a + b.case, 0);
        setTotal(total);
        const deaths = sortedData.reduce((a: number, b: state) => a + b.death, 0);
        setDeath(deaths);  

        dispatch(addNewTask(data2));
      })
      .catch((error) => {
        console.log(`Error occured on load.${error}`);
        //throw new Error();
      });
  };
  fetchData();
}, []);


  const setActiveState = (e: any) => {
    const { id } = e.currentTarget;
    dispatch(addNewTask(e));
  };

  const hasASelectedResturant = (): boolean => {
    if (state === defaultState()) {
      return false;
    }
    return true;
  };

  // https://www.c-sharpcorner.com/blogs/generate-guid-using-javascript1
  const createGuid = () => {
    function S4() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (`${S4() + S4()}-${S4()}-4${S4().substr(0, 3)}-${S4()}-${S4()}${S4()}${S4()}`).toLowerCase();
  };

  let divNumberLeft = '12';
  let divNumberRight = '0';

  if (hasASelectedResturant()) {
    divNumberLeft = '4';
    divNumberRight = '8';
  }

  return (
  
      <div className="App">
        <MDBContainer fluid>
          <MDBRow>

              <MDBCol md="1" />
              <MDBCol md="10">
                <MDBNavbar className="white-text" style={{ position: 'relative', height: '50px', backgroundColor: '#43e895' }}>
                  <MDBNavbarBrand style={{ position: 'absolute', left: '25%' }}>
                    <strong>
                      Total Cases
                      {' '}
                      {fn(currentTotal)}
                      {' '}
                      || Total Deaths
                      {' '}
                      {fn(currentDeath)}
                    </strong>
                  </MDBNavbarBrand>
                </MDBNavbar>


                <div style={{ overflowX: 'hidden', overflowY: 'scroll', maxHeight: '650px' }}>
                  <div>
                    <MDBRow>
                      <MDBCol md={divNumberLeft as any}>

                        <div><span>Click on a state below to view their data:</span></div>
                        <br />
                        {/* {currentStates.states.map((item, index) => (
                          <div key={createGuid()} id={index.toString()} onClick={setActiveState}>
                            <Card state={item} />
                          </div>
                        ))} */}

                        // @ts-ignore
                     {state.states.map((item, index) => (
                          <div key={createGuid()} id={index.toString()} onClick={setActiveState}>
                            <Card state={item} />
                          </div>
                        ))} 

                      </MDBCol>
                      <MDBCol md={divNumberRight as any} className="pl-0">

{/*
  {currentReduxState.map((state: state) => <div> state.name</div>)}
                        {currentReduxState.map((state: state) => <DetailView {...state} />)}

                         <DetailView {...currentState} /> */}
                      </MDBCol>
                    </MDBRow>
                  </div>
                </div>

              </MDBCol>
              <MDBCol md="1" />
          </MDBRow>
        </MDBContainer>

      </div>

  );
};

export default App;
