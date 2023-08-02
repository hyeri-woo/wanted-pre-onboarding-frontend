import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute({ authentication }) {
  const isLogin = !!localStorage.getItem('token');
  // 인증이 반드시 필요한 페이지 (todo)
  if (authentication) {
    // 로그인 했을 경우 todo 페이지로, 안했을 경우 signin 페이지로
    return isLogin ? <Outlet /> : <Navigate to="/signin" />;
    // 인증이 반드시 필요 없는 페이지 (signin, signup)
  } else {
    // 로그인 했을 경우 todo 페이지로, 안했을 경우 각자 페이지로
    return isLogin ? <Navigate to="todo" /> : <Outlet />;
  }
}
