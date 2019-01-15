import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {ThemeProvider} from "styled-components";


import App from './App';
import theme from './theme';
import foods from './store/reducers';

const store = createStore(foods);

const WithProviders = () => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>
);

ReactDOM.render(<WithProviders />, document.getElementById('root'));