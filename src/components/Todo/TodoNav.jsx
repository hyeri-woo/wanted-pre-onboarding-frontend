import React from 'react';
import styled from 'styled-components';
import ClearButton from '../Common/ClearButton';
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

export default function TodoNav(props) {
  const { filter, setFilter } = props;
  const navigate = useNavigate();

  const handleLogoutSubmit = (e) => {
    e.preventDefault();
    if (window.confirm('로그아웃하시겠습니까?')) {
      localStorage.removeItem('token');
      navigate('/');
    }
  };

  const handleFilter = (e) => {
    setFilter(e.target.innerText);
  };

  return (
    <NavStyle>
      <ul>
        <li>
          <ClearButton
            text="전체"
            onBtnClick={handleFilter}
            selected={filter === '전체'}
          />
        </li>
        <li>
          <ClearButton
            text="완료"
            onBtnClick={handleFilter}
            selected={filter === '완료'}
          />
        </li>
        <li>
          <ClearButton
            text="미완"
            onBtnClick={handleFilter}
            selected={filter === '미완'}
          />
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
