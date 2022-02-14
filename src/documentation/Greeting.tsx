import React from 'react';
import UserGreeting from './conditional_rendering/UserGreeting';
import GuestGreeting from './conditional_rendering/GuestGreeting';

function Greeting({isLoggedIn}:{isLoggedIn:boolean}) {
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

export default Greeting;