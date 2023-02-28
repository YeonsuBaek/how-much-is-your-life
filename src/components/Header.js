import React from 'react';
import './Header.css';

const Header = ({ onOpen }) => {
  return (
    <div className='header'>
      <h1 className='title'>How much is your life?</h1>
      <p className='description'>
        당신이 생산적인 활동을 했던 시간을 돈으로 환산해줍니다. <br />
        최저시급인 9,620원을 기준으로 계산합니다.
      </p>
      <button onClick={() => onOpen(true)}>얼마인지 보러가기</button>
    </div>
  );
};

export default Header;
