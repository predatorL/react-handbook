import React from 'react';
import { Route } from 'react-router-dom';
// layout
import home from './home';
import form from './form';
console.log(123123)
export default class View extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <React.Fragment>
                <Route path="/" exact component={home} />
                <Route path="/form" component={form} />
            </React.Fragment>
        );
    }
}
