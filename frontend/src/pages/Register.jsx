import { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an Account</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              name='name'
              id='name'
              value={name}
              placeholder='Enter your Name'
              className='form-control'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              name='email'
              id='email'
              value={email}
              placeholder='Enter your email'
              className='form-control'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              name='password'
              id='password'
              value={password}
              placeholder='Enter your password'
              className='form-control'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              name='password2'
              id='password2'
              value={password2}
              placeholder='Confirm password2'
              className='form-control'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button className='btn btn-block' type='submit'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
