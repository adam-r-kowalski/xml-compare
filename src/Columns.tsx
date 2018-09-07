import * as React from 'react';

interface Props {
    children: React.ReactChild[];
}

export default (props: Props) =>
    <div style={{ display: "flex" }}>
        {props.children}
    </div>
