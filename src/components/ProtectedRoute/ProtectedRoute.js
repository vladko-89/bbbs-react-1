/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => (
  <Route>
    {() => (props.loggedIn ? <Component {...props} /> : <Redirect to="/" />)}
  </Route>
);

ProtectedRoute.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  component: PropTypes.node.isRequired,
};
export default ProtectedRoute;
