import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { Consumer } from './context';
import { ChangeXML } from './event';

interface Props {
    title: string;
}

export default (props: Props) =>
    <Consumer>
        {({state, dispatch}) =>
            <Card style={{ flex: 1 }}>
                <CardContent>
                    <Typography variant="title">
                        {props.title}
                    </Typography>
                    <TextField
                        style={{width: "100%"}}
                        placeholder="Enter XML here"
                        multiline
                        margin="normal"
                        value={state.documents[props.title]}
                        onChange={event => 
                            dispatch(new ChangeXML(props.title, event.target.value))}
                    />
                </CardContent>
            </Card>
        }
    </Consumer>;