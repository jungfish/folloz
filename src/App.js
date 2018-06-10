import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Follow from './Follow';
import Share from './Share';

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route path="/suivre" component={Follow} />
                        <Route path="/partager" component={Share} />
                        <Redirect to="/suivre" />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
