import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

function SignupForm({register}) {
  const INITIAL_STATE = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: ""
  }
  const [formData, setFormData] = useState(INITIAL_STATE);
  const history = useHistory();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formData => ({...formData, [name]: value}));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    register(formData);
    setFormData(INITIAL_STATE);
    history.push('/');
  }
    return (
      <>
        <h1>Signup page</h1>
        <form onSubmit={handleSubmit}>
          <input
            name="firstName"
            id="firstName"
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            value={formData.firstName}
          />
          <input
            name="lastName"
            id="lastName"
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            value={formData.lastName}
          />
          <input
            name="email"
            id="email"
            type="text"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
          />
          <input
            name="username"
            id="email"
            type="text"
            placeholder="Username"
            onChange={handleChange}
            value={formData.username}
          />
          <input
            name="password"
            id="password"
            type="text"
            placeholder="Password"
            onChange={handleChange}
            value={formData.username}
          />
          <button>Sign Up</button>
        </form>
      </>
    )
  }
  
  export default SignupForm;