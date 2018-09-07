import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { Consumer } from './context';
import Columns from './Columns';
import { State } from './state';

const datacode = (state: State, title: string) =>
    <Card style={{ flex: 1 }}>
        <CardContent>
            <Typography variant="title">
                {title}
            </Typography>
            {state.datacodes[title].map(datacode => <div>{datacode}</div>)}
        </CardContent>
    </Card>;

export default () =>
    <Consumer>
        {({state}) =>
            <Columns>
                {Object.keys(state.datacodes)
                    .map(title => datacode(state, title))}
            </Columns>
        }
    </Consumer>;