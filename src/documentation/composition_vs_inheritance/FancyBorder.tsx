import React from 'react';

export default function FancyBorder(props: any) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}