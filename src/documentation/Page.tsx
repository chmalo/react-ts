import React from 'react';
import WarningBanner from './conditional_rendering/WarningBanner';

type Props = {};
type state = {showWarning: boolean};

class Page extends React.Component <Props, state>{
    constructor(props: Props) {
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    handleToggleClick(){
        this.setState(state =>({
            showWarning: !state.showWarning
        }));
    }
    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning}/>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}

export default Page;