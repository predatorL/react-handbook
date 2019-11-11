import React from 'react';
import { Route } from 'react-router-dom';
// layout
import base from './base';
import scene from './scene';
import hooks from './hooks';
import hoc from './hoc';
import store from './store';

export default class View extends React.Component {

    render() {

        return (
            <React.Fragment>
                <Route path="/base" component={base} />
                <Route path="/scene" component={scene} />
                <Route path="/hoc" component={hoc} />
                <Route path="/hooks" component={hooks} />
                <Route path="/store" component={store} />
            </React.Fragment>
        );
    }
}
