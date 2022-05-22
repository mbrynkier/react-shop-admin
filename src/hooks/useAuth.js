import React, { useState, useContext, createContext } from 'react';
import Cookie from 'js-cookie';
import Axios from 'axios';
import endPoints from '@services/api';
import axios from 'axios';

const AuthContext = createContext();

export function ProviderAuth({ children }) {
  const auth = useProviderAuth();
  return <AuthContext.Provider value={auth}> {children} </AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProviderAuth() {
  const [user, setUser] = useState(null);

  const signIn = async (email, password) => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };

    const {
      data: { access_token },
    } = await Axios.post(endPoints.auth.login, { email, password }, options);
    
    if (access_token) {
      const token = access_token;
      Cookie.set('token', access_token, { expires: 5 });

      Axios.defaults.headers.Authorization = `Bearer ${token}`;
      const { data: user } = await Axios.get(endPoints.auth.profile);
      setUser(user);
    }
  };

  const logout = () =>{
    Cookie.remove('token');
    setUser(null);
    delete axios.defaults.headers.Authorization;
    window.location.href = '/login'
  }

  return {
    user,
    signIn,
    logout
  };
}
