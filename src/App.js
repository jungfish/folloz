import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Follow from './Follow';

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={Follow} />
                        <Redirect to="/" />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
