import React from 'react';
import { Hello } from './components/Hello';

const name = 'you';

export function App(): JSX.Element {
    return <Hello name={name} />;
}
