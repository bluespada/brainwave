import React from 'react';

export interface TemplateProps {
    children: React.ReactNode
}

export default function Template(props: TemplateProps){
    return (<>
        {props.children}
    </>);
}
