import React, { useContext } from 'react';
import './index.css';
import LoginModal from '../../components/LoginModal/LoginModal';
import Context from '../../context/Context';
import Header from '../../components/Header/Header';
import Title from '../../components/Title/Title';
import SlideBackground from '../../components/SlideBackground/SlideBackground';
import RegisterModal from '../../components/RegisterModal/RegisterModal';

export default function Main() {
  const { showLoginModal, showRegisterModal } = useContext(Context);

  return (
    <>
      <Header />
      <Title />
      <SlideBackground />
      {showLoginModal && <LoginModal />}
      {showRegisterModal && <RegisterModal />}
    </>
  );
}
