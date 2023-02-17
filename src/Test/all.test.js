import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../Redux/store';
import Nav from '../Components/Nav';
import Models from '../Components/renderCrypto';
import Crypto from '../Components/createCrypto';

const crypto = { FULLName: 'bitcoin', img: 'new' };
jest.mock('axios');

describe('Nav component', () => {
  it('renders Nav component', () => {
    const r = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(r).toMatchSnapshot();
  });
  it('renders Models component', () => {
    const m = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Models />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(m).toMatchSnapshot();
  });
  it('renders Crypto component', () => {
    const m = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Crypto crypto={crypto} />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(m).toMatchSnapshot();
  });
});
