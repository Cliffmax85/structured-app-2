import { useUser } from '../../context/UserContext';
import { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom'; 

export default function Login() {
  const { login, signUp } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();
  const history = useHistory();

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      await login(email, password);

      const url = location.search.origin ? location.search.pathname : '/details';
      history.replace(url);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignUp = async () => {
    try {
      await signUp(email, password);
      const url = location.search.origin ? location.search.pathname : '/details';

      history.replace(url);
    } catch(error) {
      setError(error.message);
    }
  };
  return(
    <>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
        </label>
        <button type="submit">Sign In</button>
        <button onClick={handleSignUp}>Sign Up, Dummy!</button>
        <p>{error}</p>
      </form>
    </>
  );
}
