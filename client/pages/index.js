import React from 'react'
import axios from 'axios'

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);
  
  return <h1>Landing Page</h1>;
};

LandingPage.getInitialProps = async () => {
  if (typeof window === 'undefined') {
    const { data } = await axios.get(
      'http://ingress-nginx.ingress-nginx.svc.cluster.local/api/users/currentuser',
    );
  } else {
    const { data } = await axios.get('/api/users/currentuser')
    return data;
  }
  
  return {};
}

export default LandingPage