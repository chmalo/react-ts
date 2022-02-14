import React from 'react';

function toCelsius(fahrenheit: number) {
    return (fahrenheit - 32) * 5 / 9;
}

export default toCelsius;