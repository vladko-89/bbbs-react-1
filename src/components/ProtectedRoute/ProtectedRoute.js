/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { getAccessToken } from '../../utils/utils';

const ProtectedRoute = ({ component: Component, ...props }) => (
  <Route>
    {() => (props.loggedIn || getAccessToken() ? <Component {...props} /> : <Redirect to="/" />)}
  </Route>
);

ProtectedRoute.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
export default ProtectedRoute;
