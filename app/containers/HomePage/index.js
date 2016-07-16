/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import TopBar from '../../components/TopBar';
import BottomArea from '../../components/BottomArea';
import { firebaseDb } from '../../utils/firebase';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    firebaseDb
      .ref('/coworks')
      .once('value')
      .then((snapshot) => {
        const coworks = snapshot.val();
        Object.keys(coworks).forEach((el) => {
          console.log(coworks[el]);
        });
      })
      .catch((data) => {
        console.error(data);
      });
  }
  render() {
    return (
      <div>
        <TopBar />
        <BottomArea />
      </div>
    );
  }
}
