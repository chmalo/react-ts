import React from 'react';
import FancyBorder from "./FancyBorder";

export default function Dialog({title, message}:{title: string, message: string}) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {title}
            </h1>
            <p className="Dialog-message">
                {message}
            </p>
        </FancyBorder>
    );
}
