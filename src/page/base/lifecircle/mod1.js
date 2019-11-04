import React from 'react';

export default class View extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('componentWillMount')
    }

    


    render() {
        return (
            <section className="mod1">
                <section></section>
            </section>
        );
    }
}
