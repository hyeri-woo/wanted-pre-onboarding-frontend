import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Todo from '../pages/Todo';
import Home from '../pages/Home';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<PrivateRoute authentication={false} />}>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
      <Route element={<PrivateRoute authentication={true} />}>
        <Route path="/todo" element={<Todo />} />
      </Route>
    </Routes>
  );
}
