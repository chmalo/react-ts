import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit',
};
type state = {temperature: string}
interface Props {scale: string, temperature: string, onTemperatureChange: any};


class TemperatureInput extends React.Component <Props, state> {
    constructor(props: Props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.props.onTemperatureChange(e.target.value);
    }
    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale == 'c' ? scaleNames.c: scaleNames.f;

        return (
          <fieldset>
              <legend>Enter temperature in {scale}:</legend>
              <input value={temperature}
                     onChange={this.handleChange} />
          </fieldset>
        );
    }
}

export default TemperatureInput;