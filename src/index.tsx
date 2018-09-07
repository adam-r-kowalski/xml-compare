import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import * as colors from '@material-ui/core/colors';

import { Provider } from './context';
import { State, initialState } from './state';
import { Event } from './event';
import Router from './Router';
import AppBar from './AppBar';

document.body.style.margin = "0";
document.body.style.height = "100vh";

class App extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = initialState;
    }

    dispatch = (event: Event) => this.setState(event.update(this.state))

    render = () => 
        <Provider value={{ state: this.state, dispatch: this.dispatch }}>
            <MuiThemeProvider theme={this.state.theme}>
                <AppBar />
                <Router />
            </MuiThemeProvider>
        </Provider>
}

ReactDOM.render(<App />, document.getElementById("app"));