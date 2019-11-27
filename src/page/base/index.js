import React from 'react';
import {Route} from 'react-router-dom';
import context from './context';
import setState from './setState';

export default () => {
    return (
    <React.Fragment>
        <Route path="/base/context" component={context} />
        <Route path="/base/set-state" component={setState} />
    </React.Fragment>
    )
}
