import React from 'react';

class AsyncComponent extends React.Component {
    setStateAsync = state => new Promise(resolve => {
        this.setState(state, resolve);
    });
};

export default AsyncComponent;