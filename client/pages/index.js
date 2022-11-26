import React from 'react'
import axios from 'axios'

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);
  
  return <h1>Landing Page</h1>;
};

LandingPage.getInitialProps = async () => {
  if (typeof window === 'undefined') {
    // we are on the server! http://SERVICENAME.NAMESPACE.svc.cluster.local
    const { data } = await axios.get(
      'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser', {
        headers: {
          Host: 'ticketing.dev'
        }
      }
    );
    return data;
  } else {
    // we are on the browser!
    const { data } = await axios.get('/api/users/currentuser')
    return data;
  }
  
  return {};
}

export default LandingPage