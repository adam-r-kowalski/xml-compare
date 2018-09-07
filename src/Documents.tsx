import * as React from 'react';

import { Consumer } from './context';
import Columns from './Columns';
import Xml from './Xml';

export default () =>
    <Consumer>
        {({state}) =>
            <Columns>
                {Object.keys(state.documents).map(title =>
                    <Xml title={title} key={title} />)}
            </Columns>
        }
    </Consumer>;