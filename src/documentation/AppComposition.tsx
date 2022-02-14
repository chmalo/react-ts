import React from 'react';
import SplitPane from "./composition_vs_inheritance/SplitPane";

function Chat() {
    return null;
}

function Contacts() {
    return null;
}

export default function AppComposition() {
    return (
        <SplitPane
            left={
                <Contacts />
            }
            right={
                <Chat />
            }/>
    );
}