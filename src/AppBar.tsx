import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { Consumer } from './context';
import * as event from './event';

export default () =>
    <Consumer>
        {({dispatch}) =>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" style={{flex: 1}}>
                        XML Compare
                    </Typography>
                    <Button variant="contained"
                            color="secondary"
                            onClick={() => dispatch(new event.Compare())}>
                        Compare
                    </Button>
                    <div style={{flex: 1}} />
                </Toolbar>
            </AppBar>
        }
    </Consumer>;