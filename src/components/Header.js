import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <h1 className='title'>How much is your life?</h1>
      <p className='description'>
        당신이 생산적인 활동을 했던 시간을 돈으로 환산해줍니다. <br />
        최저시급인 9,620원을 기준으로 계산합니다.
      </p>
    </div>
  );
};

export default Header;
