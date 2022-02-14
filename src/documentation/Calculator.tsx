import React from 'react';
import TemperatureInput from './lifting_state_up/TemperatureInput';
import tryConvert from "./lifting_state_up/tryConvert";
import toCelsius from "./lifting_state_up/toCelsius";
import toFahrenheit from "./lifting_state_up/toFahrenheit";
import BoilingVerdict from "./lifting_state_up/BoilingVerdict";

type Props = {};
type state = {temperature: string, scale: string}

class Calculator extends React.Component <Props, state> {
    constructor(props: Props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'};
    }

    handleCelsiusChange(temperature: string){
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange(temperature: string){
        this.setState({scale: 'f', temperature});
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'c' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'f' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}/>
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}/>
                <BoilingVerdict
                    celsius={parseFloat(celsius)}/>
            </div>
        );
    }
}

export default Calculator;