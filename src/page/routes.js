import React from 'react';
import { Route } from 'react-router-dom';
// layout
import base from './base';
import scene from './scene';
import hooks from './hooks';
import hoc from './hoc';

export default class View extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <React.Fragment>
                <Route path="/base" component={base} />
                <Route path="/scene" component={scene} />
                <Route path="/hoc" component={hoc} />
                <Route path="/hooks" component={hooks} />
            </React.Fragment>
        );
    }
}
