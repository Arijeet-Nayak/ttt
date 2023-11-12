import React from 'react';

const UserProfile = () => {
  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <div style={styles.logo}>Logo</div>
        <div style={styles.navText}>Home</div>
        <div style={styles.navButton}>Logout</div>
      </nav>

      <div style={styles.profileContainer}>
        <div style={styles.backgroundImage}>
          {/* Your square background profile photo */}
          <img
            src="https://placekitten.com/600/400"
            alt="Background"
            style={styles.backgroundImage}
          />
          {/* Your circular profile photo */}
          <div style={styles.circularProfileImageWrapper}>
          <img
            src="https://placekitten.com/200/200"
            alt="Profile"
            style={styles.profileImage}
          />
        </div>
        </div>

        <div style={styles.profileInfo}>
          <h2 style={styles.profileName}>John Doe</h2>

          <div style={styles.profileMeta}>
          <span style={styles.metaLink}>Followers: 500</span>
          <span style={styles.metaLink}>Following: 200</span>
          </div>

          <p style={styles.profileBio}>Web Developer</p>
          <div style={styles.profileButtons}>
            <button style={styles.smallButton}>Button 1</button>
            <button style={styles.smallButton}>Button 2</button>
            <button style={styles.smallButton}>Button 3</button>
            <button style={styles.smallButton}>Button 4</button>
          </div>
        </div>
      </div>

      <div style={styles.posts}>
        <h2>Recent Posts</h2>
        {/* Dummy posts */}
        <div style={styles.post}>Post 1</div>
        <div style={styles.post}>Post 2</div>
        <div style={styles.post}>Post 3</div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
  },
  logo: {
    fontWeight: 'bold',
  },
  navText: {
    cursor: 'pointer',
  },
  navButton: {
    cursor: 'pointer',
    padding: '8px 16px',
    backgroundColor: '#5cb85c',
    color: '#fff',
    borderRadius: '4px',
  },
  profileContainer: {
    position: 'relative',
  },
  backgroundImage: {
    position: 'relative',
    width: '100%',
    // overflow: 'hidden',
    marginBottom: '20px',
  },
  circularProfileImageWrapper: {
    position: 'absolute',
    bottom: '0',
    left: '15%',
    transform: 'translate(20%, 20%)', 
    
  },
  profileImage: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    border: '2px solid #fff',
    
  },
  profileInfo: {
    padding: '16px',
    backgroundColor: '#fff',
    marginTop: '-40px',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    
  },
  
  profileName: {
    margin: '0',
    fontSize: '20px',
  },
  profileMeta: {
    margin: '5px 0px',
    color: '#555',
    display: 'flex',
  },
  metaLink: {
    marginRight: '10px',
    padding: '5px',
    backgroundColor: '#eee',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  profileBio: {
    margin: '10px 0',
    color: '#555',
  },
  profileButtons: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  smallButton: {
    padding: '8px 16px',
    backgroundColor: '#5cb85c',
    color: '#fff',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  posts: {
    marginTop: '20px',
  },
  post: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '10px 0',
  },
};

export default UserProfile;
