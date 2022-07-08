import axios from 'axios';
import { setAuthorizationToken } from '../helpers/setAuthorizationToken';

const login = async (username, password) => {
  return axios
    .post('http://localhost:3000/account/login', { username, password })
    .then((res) => {
      if (res.data.status) {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        setAuthorizationToken(token);
      }
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const logout = () => {
  localStorage.removeItem('jwtToken');
  setAuthorizationToken(false);
};

export { login, logout };
