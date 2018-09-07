import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { Consumer } from './context';
import Columns from './Columns';
import { State } from './state';

const listItemStyle = (state: State, title: string, code: string) => ({
    color: state.uniqueDatacodes[title].has(code) ? state.theme.palette.secondary.main : 'black',
    fontSize: 22,
    fontFamily: "Roboto",
    margin: 10
});

const datacode = (state: State, title: string) =>
    <Card style={{ flex: 1 }} key={title}>
        <CardContent>
            <Typography variant="title">
                {title}
            </Typography>
            {[...state.datacodes[title]]
                .sort((a, b) => {
                    if (state.uniqueDatacodes[title].has(a)) return -1;
                    if (state.uniqueDatacodes[title].has(b)) return 1;
                    return a < b ? -1 : 1;
                })
                .map(datacode =>
                    <div style={listItemStyle(state, title, datacode)}>{datacode}</div>)
            }
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