import React from 'react';
import { Route } from 'react-router-dom';
// layout
import home from './home';
import form from './form';
import context from './context';

export default class View extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <React.Fragment>
                <Route path="/" exact component={home} />
                <Route path="/form" component={form} />
                <Route path="/context" component={context} />
            </React.Fragment>
        );
    }
}
