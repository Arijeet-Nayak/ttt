import React from 'react';
import './UserProfile.css';

function UserProfile() {
  return (
    <div className="UserProfile">
      <nav className="navbar">
        <div className="logo">
          <img src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?size=626&ext=jpg&ga=GA1.1.1196953875.1699991651&semt=sph" alt="Logo" />
          <img src="/images/line.png" alt="Vertical Line" className="vertical-line" />
          <span className="company-name">STORIES</span>
        </div>
        <button className="nav-button"><strong>Courses</strong></button>
      </nav>
      <div className="background">
      <div className="profile-picture"></div>
        <div className="profile">
          
          <div className="profile-info">
            <span className="name">Name</span>
            <div className="followers-followings">
              <div className="followers-button">
                <button className="count">1000</button>
                <span className="text">Followers</span>
              </div>
              <div className="followings-button">
                <button className="count">500</button>
                <span className="text">Followings</span>
              </div>
            </div>
            <span className="bio">Bio line 1</span>
            <span className="bio">Bio line 2</span>
            <div className="interaction-buttons">
              <button className="star-button">Star</button>
              <button className="thumbs-up-button">Thumbs Up</button>
              <button className="eye-button">Eye</button>
              <button className="heart-button">Heart</button>
            </div>
          </div>
        </div>
      </div>
      <div className="posts-section">
        <span className="post-count">Total Posts: 10</span>
        <div className="post">
          <span className="topic">Post Topic</span>
          <span className="content">Post Content</span>
          <div className="author-info">
            <span className="author-name">Author Name</span>
            <div className="post-details">
              <span className="date">Nov 14</span>
              <span className="read-time">5 min read</span>
              <span className="views">100 views</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;