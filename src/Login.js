import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { loginUser, useAuthState, useAuthDispatch } from './Context';
import styles from './login.module.css';

function Login(props) {
    const [user_name, setuser_name] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useAuthDispatch();
    const { loading, errorMessage } = useAuthState();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            let response = await loginUser(dispatch, { user_name, password });
            if (!response.user) return;
            props.history.push('/dashboard');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles.container}>

            <div className={{ width: 200 }}>

                {errorMessage ? <p className={styles.error}>{errorMessage}</p> : null}
                <form>
                    <div className={styles.loginForm}>
                        <div className={styles.loginFormItem}>
                            <label htmlFor='user_name'>User name</label>
                            <input
                                type='text'
                                id='user_name'
                                value={user_name}
                                onChange={(e) => setuser_name(e.target.value)}
                                disabled={loading}
                            />
                        </div>
                        <div className={styles.loginFormItem}>
                            <label htmlFor='password'>Password</label>
                            <input
                                type='password'
                                id='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                disabled={loading}
                            />
                        </div>
                    </div>
                    <button onClick={handleLogin} disabled={loading}>
                        login
					</button>
                </form>
            </div>
        </div>
    );
}

export default Login;