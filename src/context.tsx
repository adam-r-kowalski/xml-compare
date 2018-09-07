import * as React from 'react';

import { Event } from './event';
import { State, initialState } from './state';

export interface Context {
    state: State;
    dispatch: (event: Event) => void;
}

const { Provider, Consumer } = React.createContext<Context>({
    state: initialState,
    dispatch: console.log
})

export { Provider, Consumer };
