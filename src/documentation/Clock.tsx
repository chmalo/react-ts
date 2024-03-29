import React from 'react';

let timerID: any

class Clock extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(timerID);
    }


    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, Christian!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Clock;