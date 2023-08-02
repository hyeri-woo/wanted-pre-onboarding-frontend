import React from 'react';
import styled from 'styled-components';
import ClearButton from '../Common/ClearButton';
import { useDispatch } from 'react-redux';
import accountSlice from '../../redux/accountSlice';
import { useNavigate } from 'react-router-dom';

const NavStyle = styled.nav`
  padding: 10px;
  width: 100%;
  ul {
    width: 100%;
    display: flex;
    gap: 10px;
  }
  .logout {
    margin-left: auto;
    float: right;
  }
`;

export default function TodoNav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogoutSubmit = (e) => {
    e.preventDefault();
    if (window.confirm('로그아웃하시겠습니까?')) {
      dispatch(accountSlice.actions.reset());
      localStorage.removeItem('token');
      alert('로그아웃에 성공하셨습니다.');
      navigate('/');
    }
  };
  return (
    <NavStyle>
      <ul>
        <li>
          <ClearButton text="전체" onBtnClick="" />
        </li>
        <li>
          <ClearButton text="완료" onBtnClick="" />
        </li>
        <li>
          <ClearButton text="미완" onBtnClick="" />
        </li>
        <li className="logout">
          <ClearButton
            text="로그아웃"
            type="submit"
            onBtnClick={handleLogoutSubmit}
          />
        </li>
      </ul>
    </NavStyle>
  );
}
