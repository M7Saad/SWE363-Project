import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Meeting from './meeting';

let playload= {
  meetingNumber: 72004349955,
  role: 0,
  sdkKey: "E2pqX7zNReKgz0hvpYTJWA",
  sdkSecret: 'LxzB21gEh6S2Op6YguCvnKVLB2PWDxfa',
  passWord: '8dbvMU',
  userName: 'Testing',
  userEmail: '',
  leaveUrl: 'http://localhost:3000/',
}
const root = ReactDOM.createRoot(document.getElementById('root'));
const router =  createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/meeting',
    element: <Meeting playload = {playload}/>
  }
])
root.render(
  <RouterProvider router={router}></RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
