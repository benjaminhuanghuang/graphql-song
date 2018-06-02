import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default ({ children }) => {
  return (
    <div className="container">
      {children}
    </div>);
};
