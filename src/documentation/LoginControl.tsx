import React from 'react';
import LogoutButton from './conditional_rendering/LogoutButton';
import LoginButton from './conditional_rendering/LoginButton';
import Greeting from './Greeting';

type Props = {};
type state = {isLoggedIn: boolean};

class LoginControl extends React.Component <Props, state> {
    constructor(props: Props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
        this.state = {isLoggedIn: false}
    }

    handleLoginClick(){
        this.setState({isLoggedIn: true});
    }
    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }
    render(){
        const isLoggedIn = this.state.isLoggedIn;
        return (
          <div>
              {isLoggedIn
                  ? <LogoutButton onClick={this.handleLogoutClick}/>
                  : <LoginButton onClick={this.handleLoginClick}/>
              }
              <Greeting isLoggedIn={isLoggedIn}/>
          </div>
        );
    }
}

export default LoginControl;