import React, { FormEvent } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Toggle from './documentation/Toggle';
import LoginControl from './documentation/LoginControl';
import Mailbox from './documentation/Mailbox';
import Page from './documentation/Page';
import NumberList from './documentation/NumberList';
import Blog from './documentation/Blog';
import NameForm from './documentation/forms/NameForm';
import EssayForm from './documentation/forms/EssayForm';
import Calculator from './documentation/Calculator';
import WelcomeDialog from "./documentation/WelcomeDialog";
import AppComposition from "./documentation/AppComposition";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//     <LoginControl />,
//     document.getElementById('root3')
// );


// const messages: string[] = ['React', 'Re: React', 'Re:Re: React'];
// ReactDOM.render(
//     <Mailbox unreadMessages={messages}/>,
//     document.getElementById('root4')
// );
//
// ReactDOM.render(
//     <WelcomeDialog />,
//     document.getElementById('root5')
// );

// const numbers: number[] = [1, 2, 3, 4, 5];
// ReactDOM.render(
//     <NumberList numbers={numbers}/>,
//     document.getElementById('root6')
// )

// interface posts  {id: number, title: string, content: string}
// const posts: posts[]= [
//     {id:1, title: 'Hello Christian', content: 'Welcome to learning React!'},
//     {id:2, title: 'Installation', content: 'You can install React from npm.'}
// ];
//
// ReactDOM.render(
//     <Blog posts={posts}/>,
//     document.getElementById('root7')
// );

// ReactDOM.render(
//     <NameForm />,
//     document.getElementById('root6')
// );
//
// ReactDOM.render(
//     <Calculator />,
//     document.getElementById('root7')
// );