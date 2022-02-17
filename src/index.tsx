import React, { FormEvent } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
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
import Example from "./hooks/Example";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
    <Example />,
    document.getElementById('root2')
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
