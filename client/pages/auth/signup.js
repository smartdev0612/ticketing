import React, { useState } from 'react';
import axios from 'axios';
import useRequest from '../../hooks/use-request';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/users/signup',
    method: 'post',
    body: {
      email, password
    }
  })

  const onSubmit = async event => {
    event.preventDefault();
    
    doRequest();
  }

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign Up</h1>
      <div className='form-group'>
        <label htmlFor="">Email Address</label>
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} className='form-control' />
      </div>
      <div className='form-group'>
        <label htmlFor="">Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} className='form-control' />
      </div>
      {errors}
      <button className='btn btn-primary'>Sign Up</button>
    </form>
  )
}

export default Signup