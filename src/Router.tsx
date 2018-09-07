import * as React from 'react';

import { Consumer } from './context';
import { Route } from './state';
import Documents from './Documents';
import Datacodes from './Datacodes';

const router = (route: Route) => {
    switch(route) {
        case Route.Documents:
            return <Documents />;
        case Route.Datacodes:
            return <Datacodes />;
    } 
};

export default () =>
    <Consumer>{({state}) => router(state.route)}</Consumer>