import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

function LoginForm({login}) {
  const INITIAL_STATE = {username: "", password: ""}
  const [formData, setFormData] = useState(INITIAL_STATE);
  const history = useHistory();
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formData => ({...formData, [name]: value}));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
    setFormData(INITIAL_STATE);
    history.push("/");
  }
    return (
      <>
        <h1>Login page</h1>
        <form onSubmit={handleSubmit}>
          <input
            name="username"
            type="text"
            placeholder="Username"
            onChange={handleChange}
            value={formData.username}
          />
          <input
            name="password"
            type="text"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
          />
          <button>Login</button>
        </form>
      </>
    )
  }
  
  export default LoginForm;