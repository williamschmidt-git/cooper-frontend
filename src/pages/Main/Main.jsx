import React, { useContext } from 'react';
import './index.css';
import LoginModal from '../../components/LoginModal/LoginModal';
import Context from '../../context/Context';
import Header from '../../components/Header/Header';
import Title from '../../components/Title/Title';
import SlideBackground from '../../components/SlideBackground/SlideBackground';

export default function Main() {
  const { showModal } = useContext(Context);

  return (
    <>
      <Header />
      <Title />
      <SlideBackground />
      {showModal ? (
        <LoginModal />
      ) : null}
    </>
  );
}
