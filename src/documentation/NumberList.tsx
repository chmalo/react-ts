import React from 'react';
import ListItem from './lists_and_keys/ListItem';

function NumberList({numbers}:{numbers: number[]}) {
    return (
        <ul>
            {numbers.map((number: number) =>
                <ListItem key={number.toString()}
                          value={number} />
            )}
        </ul>
    );
}

export default NumberList;