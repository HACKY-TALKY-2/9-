import { useState, useCallback } from 'react';

export default () => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem('id') == null);
  const [id, setId] = useState(localStorage.getItem('id'));

  const login = useCallback((uid) => {
    setIsLogin(true)  ;
    setId(uid);

    localStorage.setItem('id', uid);
  }, []);
  
  const logout = useCallback(()=>{
    setIsLogin(false) ;
    setId(null);

    localStorage.setItem('id', null);
  }, []);
  
  return [isLogin, id, login, logout];
}