import * as React from 'react';

interface DefaultProps {
    crispToken?:string;
    domain?:string;
}

declare class Help extends React.Component<DefaultProps> {
    // @ts-ignore
    render(): JSX.Element;
}

export default Help;