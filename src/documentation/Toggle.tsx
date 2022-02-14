import React from 'react';

type Props = {};
type state = {isToggleOn: boolean}

class Toggle extends React.Component <Props, state> {
    constructor(props: any) {
        super(props);
        this.state ={isToggleOn: true};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState =>({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render(){
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

export default Toggle;