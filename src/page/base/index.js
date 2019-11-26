import React from 'react';
import context from './context';
import {Route} from 'react-router-dom';

export default () => {
    return (
    <React.Fragment>
        <Route path="/base/context" component={context} />
    </React.Fragment>
    )
}
