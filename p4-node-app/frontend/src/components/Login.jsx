import React, { useState } from 'react';
import { Toaster } from 'sonner';
// source: https://sonner.emilkowal.ski/toast
import { useLogin } from '../hooks/useLogin';

function Login() {
  const { login, isLoading, error } = useLogin();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const { email, password } = values;

    try {
      await login(email, password);
      localStorage.setItem('signedIn', email);
      window.location.reload();
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className="Login">
      <Toaster expand={true} position="top-center" richColors closeButton />
      <div className="login-container">
        <div className="sub-heading sub-heading--white">Log In</div>
        <form onSubmit={onSubmitHandler} className="login-form">
          <label htmlFor="email-login">Email: </label>
          <input
            id="email-login"
            type="email"
            name="email"
            maxLength="100"
            className="inputs"
            onChange={onChangeHandler}
            value={values.email}
          />

          <label htmlFor="password-login">Password: </label>
          <input
            id="password-login"
            type="password"
            name="password"
            maxLength="100"
            className="inputs"
            onChange={onChangeHandler}
            value={values.password}
          />

          <button className="greyButton btn-normal" disabled={isLoading}>
            Log In
          </button>
          <a href="#">Forgot password?</a>
        </form>
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
}

export default Login;
