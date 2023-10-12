import React from 'react';
// import profileCss from './Profile.module.css';
import profileCss from './Profile.module.css'

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={profileCss.profile}>
      <div className={profileCss.description}>
        <img src={avatar} alt="User avatar" className={profileCss.avatar} />
        <p className={profileCss.name}>{username}</p>
        <p className={profileCss.tag}>@{tag}</p>
        <p className={profileCss.location}>{location}</p>
      </div>

      <ul className={profileCss.stats}>
        <li className={profileCss.withBorder}>
          <span className={profileCss.label}>Followers</span>
          <span className={profileCss.quantity}>{stats.followers}</span>
        </li>
        <li className={profileCss.withBorder}>
          <span className={profileCss.label}>Views</span>
          <span className={profileCss.quantity}>{stats.views}</span>
        </li>
        <li className={profileCss.withBorder}>
          <span className={profileCss.label}>Likes</span>
          <span className={profileCss.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
