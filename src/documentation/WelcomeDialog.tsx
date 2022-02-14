import React from 'react';
import FancyBorder from "./composition_vs_inheritance/FancyBorder";
import Dialog from "./composition_vs_inheritance/Dialog";

export default function WelcomeDialog() {
    return (
        <Dialog
            title="Welcome"
            message="Thank you for visiting our spacecraft!"/>
    );
}