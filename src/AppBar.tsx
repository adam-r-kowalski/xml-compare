import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { Consumer } from './context';
import * as event from './event';
import { Route } from './state';

export default () =>
    <Consumer>
        {({state, dispatch}) =>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" style={{flex: 1}}>
                        XML Compare
                    </Typography>
                    <Button variant="contained"
                            color="secondary"
                            onClick={() => dispatch(
                                state.route == Route.Datacodes ?
                                    new event.ShowDocuments() :
                                    new event.ShowDatacodes()
                            )}>
                        {state.route == Route.Datacodes ? 'Documents' : 'Datacodes' }
                    </Button>
                    <div style={{flex: 1}} />
                </Toolbar>
            </AppBar>
        }
    </Consumer>;