import React from 'react';
import history from './util/history';
import { Router } from 'react-router-dom';
import Routes from './page/routes';
import { Provider } from 'mobx-react';

class App extends React.Component {
    render() {
        return (
            <Provider {...store}>
                <Router history={history}>
                <div className="page-root">
                        <aside className="page-aside">
                        aside
                        </aside>
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

