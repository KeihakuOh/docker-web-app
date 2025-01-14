import React, { useState } from 'react';

const LogoutScreen = ({ onLogout }) => {
  const [info, setInfo] = useState(null);

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:5000/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        onLogout();
      } else {
        const data = await response.json();
        console.error('Logout failed:', data.error || 'Unknown error');
      }
    } catch (err) {
      console.error('An unexpected error occurred:', err);
    }
  };

  const fetchInfo = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/info');
      if (response.ok) {
        const data = await response.json();
        setInfo(data);
      } else {
        console.error('Failed to fetch info');
      }
    } catch (err) {
      console.error('An error occurred while fetching info:', err);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.mainContent}>
        <h2 style={styles.title}>Welcome!</h2>
        <p style={styles.message}>You have successfully logged in.</p>
        <button onClick={fetchInfo} style={styles.infoButton}>
          Fetch Info
        </button>
        <button onClick={handleLogout} style={styles.logoutButton}>
          Logout
        </button>
      </div>
      <div style={styles.infoContainer}>
        {info ? (
          <pre style={styles.infoText}>{JSON.stringify(info, null, 2)}</pre>
        ) : (
          <p style={styles.infoPlaceholder}>Click "Fetch Info" to see the details here.</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '30px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    animation: 'fadeIn 0.5s',
    width: '80%',
    margin: '0 auto',
  },
  mainContent: {
    textAlign: 'center',
    flex: '1',
  },
  title: {
    marginBottom: '10px',
    color: '#333',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  message: {
    marginBottom: '20px',
    color: '#666',
    fontSize: '16px',
  },
  infoButton: {
    padding: '12px 24px',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#28a745',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    marginRight: '10px',
    transition: 'background-color 0.3s',
  },
  logoutButton: {
    padding: '12px 24px',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#dc3545',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  infoContainer: {
    flex: '1',
    marginLeft: '20px',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  infoText: {
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
    fontFamily: 'monospace',
    fontSize: '14px',
    color: '#333',
  },
  infoPlaceholder: {
    color: '#aaa',
    fontSize: '14px',
  },
};

export default LogoutScreen;
