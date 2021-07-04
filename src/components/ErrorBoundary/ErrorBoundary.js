/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

import './ErrorBoundary.scss';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
  componentDidCatch(error, errorInfo) {
    console.error('Error Boundary Info: ', errorInfo);
  }

  render() {
    // Можно отрендерить запасной UI произвольного вида
    if (this.state.hasError) {
      return <h1 className="error-boundary__message">Что-то пошло не так.</h1>;
    }
    return this.props.children;
  }
}
