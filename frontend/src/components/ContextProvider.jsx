import React from 'react';
import {Provider} from "react-redux";
import configureStore from "../store";

const ContextProvider = ({ children }) => {
  const store = configureStore();
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default ContextProvider;