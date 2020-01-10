import React from 'react';
import LoginContainer from '../components/login'
import RegisterComponent from '../components/register'
export default {
    title: 'Login'
};

export const login = () => (
    <LoginContainer />
)

export const register = () => (
    <RegisterComponent />
)

export const combined = () => (
    <LoginContainer />
)