import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// mount function to mount the app to the DOM
const mount = (el) => { 
    ReactDOM.render(
        //<Component {...props} />, target
        <App/>,
        el
    );
};

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#_child_nu-marketing-root');
    if (el) {
        mount(el);
    }
}

export { mount };