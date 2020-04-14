import React, { useState, useEffect } from 'react';
import {
  MDBCol, MDBContainer, MDBRow, MDBNavbar, MDBNavbarBrand,
} from 'mdbreact';
import { connect, Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import invariant from 'redux-immutable-state-invariant';
import { createStore, applyMiddleware } from 'redux';
import { state, defaultState } from './types';
import DetailView from './DetailView';
import Card from './Card';
import { fn } from './util';


// Redux things

import { reducer } from './redux/reducer/reducer';
import { addNewTask } from './redux/actions/actions';
import fetchAPIData from './fetchAPIData';

export interface AppState { states: [state]; }

const App = () => {
  const [currentStates, setStates] = useState({ states: [defaultState()] });
  const [currentState, setState] = useState(defaultState());
  useEffect(() => {
    fetchAPI();
  });

  const [currentTotal, setTotal] = useState(0);
  const [currentDeath, setDeath] = useState(0);

  const setActiveState = (e: any) => {
    const { id } = e.currentTarget;
    setState(currentStates.states[id]);
    store.dispatch(addNewTask('message'));
    setReduxArray();

    console.log(store.getState());
  };

  const hasASelectedResturant = (): boolean => {
    if (currentState === defaultState()) {
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

  const [currentReduxState, setReduxState] = useState([defaultState()]);
  let setReduxArray = () => {
    const holder = store.getState().states.map((x) => ({
      index: x.index,
      state: x.state,
      case: x.case,
      death: x.death,
      updated: x.updated.toDateString(),
    }));

    setReduxState(holder);
  };

  async function fetchAPI() {
    try {
      const sortedData = await fetchAPIData();

      const total = sortedData.reduce((a: number, b: state) => a + b.case, 0);
      setTotal(total);
      const deaths = sortedData.reduce((a: number, b: state) => a + b.death, 0);
      setDeath(deaths);

      setStates({ states: sortedData });
      setState({ ...sortedData[0] });
    } catch (error) {
      console.log(`Error occured on load.${error}`);
     
    }
  }

  let divNumberLeft = '12';
  let divNumberRight = '0';

  if (hasASelectedResturant()) {
    divNumberLeft = '4';
    divNumberRight = '8';
  }

  const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });
  const store = createStore(reducer, composeEnhancers(
    applyMiddleware(invariant()),
  ));

  return (
    <Provider store={store}>
      <div className="App">
        <MDBContainer fluid>
          <MDBRow>

          
              <MDBCol md="2" />
              <MDBCol md="8">
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
                        {currentStates.states.map((item, index) => (
                          <div key={createGuid()} id={index.toString()} onClick={setActiveState}>
                            <Card state={item} />
                          </div>
                        ))}
                      </MDBCol>
                      <MDBCol md={divNumberRight as any} className="pl-0">

                      {currentReduxState.map((state: state) => <div> state.name</div>)}

{/*
                        {currentReduxState.map((state: state) => <DetailView {...state} />)}

                         <DetailView {...currentState} /> */}
                      </MDBCol>
                    </MDBRow>
                  </div>
                </div>

              </MDBCol>
              <MDBCol md="2" />

           
          </MDBRow>
        </MDBContainer>

      </div>
    </Provider>
  );
};

export default App;
