import { signUpUser } from '../services/users';
import AuthForm from '../components/AuthForm';
import { useState } from 'react';

export default function SignUp() {
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUpUser(email, password);
    } catch {
      setErrorMessage('Oops, something went wrong, please make sure all fields are filled out.');
    }
  };

  return (
    <div>
      <h3>this is the sign up page</h3>
      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        errorMessage={errorMessage}
      />
    </div>
  );
}
