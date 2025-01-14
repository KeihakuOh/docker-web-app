import React, { useState } from 'react';
import Login from './Login';
import LogoutScreen from './LogoutScreen';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: 'url(/photo.jpg)', // 背景画像のパス
        backgroundSize: 'cover', // 画像を全体に拡大
        backgroundPosition: 'center', // 画像を中央に配置
        backgroundRepeat: 'no-repeat', // 画像の繰り返しを無効化
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {isLoggedIn ? (
        <LogoutScreen onLogout={handleLogout} />
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
};

export default App;
