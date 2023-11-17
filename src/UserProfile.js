import React from 'react';
import './UserProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faThumbsUp, faEye, faHeart } from '@fortawesome/free-solid-svg-icons';

const UserProfile = () => {
  // Function to handle button clicks
  const handleButtonClick = (buttonType) => {
    // Handle button click based on the buttonType
    console.log(`Button clicked: ${buttonType}`);
  };

  return (
    <div className="UserProfile">
      {/* Navigation bar */}
      <nav className="navbar">
        <div className="logo">
          <img src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?size=626&ext=jpg&ga=GA1.1.1196953875.1699991651&semt=sph" alt="Logo" />
          <img src="/images/line.png" alt="Vertical Line" className="vertical-line" />
          <span className="company-name">STORIES</span>
        </div>
        <button className="nav-button"><strong>Courses</strong></button>
      </nav>

      {/* User profile section */}
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

            {/* Interaction buttons */}
            <div className="interaction-buttons">
            <button className="star-button button" onClick={() => handleButtonClick('star')}>
          <FontAwesomeIcon icon={faStar} className="icon" />
          <span className="button-number">1</span>
        </button>
        <button className="thumbs-up-button button" onClick={() => handleButtonClick('thumbsUp')}>
          <FontAwesomeIcon icon={faThumbsUp} className="icon" />
          <span className="button-number">2</span>
        </button>
        <button className="eye-button button" onClick={() => handleButtonClick('eye')}>
          <FontAwesomeIcon icon={faEye} className="icon" />
          <span className="button-number">3</span>
        </button>
        <button className="heart-button button" onClick={() => handleButtonClick('heart')}>
          <FontAwesomeIcon icon={faHeart} className="icon" />
          <span className="button-number">4</span>
        </button>
            </div>
          </div>
        </div>
      </div>

      {/* Posts section */}
      <div className="posts-section">
        <span className="post-count">Total Posts: 10</span>
        <div className="post">
          <span className="topic">Post Topic</span>
          <span className="content">
            Post Content with some details. Add more text here.
            <FontAwesomeIcon icon={faThumbsUp} className="thumbs-up-icon" />
          </span>
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
};

export default UserProfile;
