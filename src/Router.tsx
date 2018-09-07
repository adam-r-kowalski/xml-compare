import * as React from 'react';

import { Consumer } from './context';
import { Route } from './state';
import Documents from './Documents';

const router = (route: Route) => {
    switch(route) {
        case Route.Documents:
            return <Documents />;
    } 
};

export default () =>
    <Consumer>{({state}) => router(state.route)}</Consumer>