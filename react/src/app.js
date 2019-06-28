import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import Store from './store';
import history from './util/history';
import Routes from './page/routes';
import Aside from './mod/aside';

const store = new Store();

class App extends React.Component {
    render() {
        return (
            <Provider {...store}>
                <Router history={history}>
                    <div className="page-root">
                        <Aside />
                        <main className="page-main">
                            <Routes />
                        </main>
                    </div>
                </Router>
            </Provider>
        );
    }
}
export default App;
