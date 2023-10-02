import React from 'react';
import FormComponent from '../common/FormComponent';

const LoginForm = ({ loginUser }) => {
    const initialState = {
        username: '',
        password: '',
    };

    return (
        <FormComponent
            header={'Login'}
            initialState={initialState}
            inputs={['username', 'password']}
            submitFunc={loginUser}
        />
    );
}

export default LoginForm;