import React from 'react';

export interface Props {
    name: string;
}

export function Hello({ name }: Props) {
    return <h1>Hello {name}</h1>;
}
