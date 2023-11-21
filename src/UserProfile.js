import React from 'react';
import './UserProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faThumbsUp, faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import data from './AuthorDetails.json';

 

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
          <img src="/images/logo.png" alt="Logo" />
          <img src="/images/line.png" alt="Vertical Line" className="vertical-line" />
          <span className="company-name"><strong>STORIES</strong></span>
        </div>
        <button className="nav-button"><strong>Courses</strong></button>
      </nav>

      {/* User profile section */}
      <div className="background">
        <div className="profile-picture"></div>
        <div className="profile">
          <div className="profile-info">

            <div className='name-icon'>
            <span className="name">Arijeet Nayak</span>
            <img src="/images/gem.png" alt="Premium" className='avatar-logo gem'></img>
            <img src="/images/check.png" alt="Verified" className='avatar-logo'></img>
            </div>

            <div className="followers-followings">
              <div className="followers-button">
                <button className="count">6482</button>
                <span className="text">Followers</span>
              </div>
              <div className="followings-button">
                <button className="count">245</button>
                <span className="text">Followings</span>
              </div>
            </div>

          </div>

          
        </div>

        <div className='interaction'>
        <span className="bio bio1">Frontend developer at Terribly Tiny Tales</span><br></br>
        <span className="bio bio2">
        <a href="https://www.linkedin.com/in/arijeet-nayak/" target="_blank" rel="noopener noreferrer">
            https://www.linkedin.com/in/arijeet-nayak/
        </a>
          </span>

            {/* Interaction buttons */}
            <div className="interaction-buttons">
            <button className="star-button button" onClick={() => handleButtonClick('star')}>
          <FontAwesomeIcon icon={faStar} className="icon" />
        </button>
        <span className="button-number">&nbsp;&nbsp;125&nbsp;&nbsp;</span>

        <button className="thumbs-up-button button" onClick={() => handleButtonClick('thumbsUp')}>
          <FontAwesomeIcon icon={faThumbsUp} className="icon" />
        </button>
        <span className="button-number">&nbsp;&nbsp;12&nbsp;&nbsp;</span>

        <button className="eye-button button" onClick={() => handleButtonClick('eye')}>
          <FontAwesomeIcon icon={faEye} className="icon" />
        </button>
        <span className="button-number">&nbsp;&nbsp;57.8k&nbsp;&nbsp;</span>

        <button className="heart-button button" onClick={() => handleButtonClick('heart')}>
          <FontAwesomeIcon icon={faHeart} className="icon" />
        </button>
        <span className="button-number">&nbsp;&nbsp;26.0k</span>
        
            </div>
        </div>

      </div>

      {/* Posts section */}
      <div className="posts-section">
        <span className="post-count">134 Posts</span><hr className='hr-top'/>
        <div className="post">

          <div className="post-top">
          <span className="topic">A Changing World Order</span>
          <button className="thumbs-up-button button" onClick={() => handleButtonClick('thumbsUp')}>
          <FontAwesomeIcon icon={faThumbsUp} className="icon" />
        </button>
          </div>


          <div className="content">
          The world is changing at a feverish pace. Friends,
          colleagues and everyone engaged in knowledge
          work are beginning to sense this, including...
          </div>

          <div className="author-info">
            <span className="author-name"><span className="color-author">musing</span> <span className="grey-author">{data.author}</span></span>
            <div className="post-details">
              <span className="date">August 2   <span className='dot'>&#183;</span> </span>
              <span className="read-time">2 min Read <span className='dot'>&#183;</span> </span>
              <span className="views">102 Views</span>
            </div>
          </div>
        </div>

      <hr></hr>

        <div className="post">

          <div className="post-top">
          <span className="topic">Indian v/s Australia</span>
          <button className="thumbs-up-button button" onClick={() => handleButtonClick('thumbsUp')}>
          <FontAwesomeIcon icon={faThumbsUp} className="icon" />
        </button>
          </div>


          <div className="content">
          Think about it - this cricket series was akin to
          therapy.<br/><br/>

          Laying our childhood trauma up top, working with
          it slowly and surely over two m...
          </div>

          <div className="author-info">
            <span className="author-name"><span className="color-author">thought</span> <span className="grey-author">{data.author}</span></span>
            <div className="post-details">
              <span className="date">January 21<span className='dot'>&#183;</span> </span>
              <span className="read-time">1 min Read <span className='dot'>&#183;</span> </span>
              <span className="views">156 Views</span>
            </div>
          </div>
        </div>

        <hr></hr>

        <div className="post">

          <div className="post-top">
          <span className="topic">Write To Build</span>
          <button className="thumbs-up-button button" onClick={() => handleButtonClick('thumbsUp')}>
          <FontAwesomeIcon icon={faThumbsUp} className="icon" />
        </button>
          </div>


          <div className="content">
          Writing is the first step to create:
            <br/><br/>
          - stories       <br/>
          - products      <br/>
          - companies
          </div>

          <div className="author-info">
            <span className="author-name"><span className="color-author">thought</span> <span className="grey-author">{data.author}</span></span>
            <div className="post-details">
              <span className="date">November 18 <span className='dot'>&#183;</span> </span>
              <span className="read-time">1 min Read <span className='dot'>&#183;</span> </span>
              <span className="views">228 Views</span>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default UserProfile;
