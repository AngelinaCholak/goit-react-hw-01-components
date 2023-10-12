
import React from 'react';
import styles from './friendListItem.module.css';
const FriendItem = ({ friend }) => (
  <li className={styles.friendList}>
    <span className={`status ${friend.isOnline ? 'online' : 'offline'}`}></span>
        <img
            src={friend.avatar}
            alt="User avatar"
            width="48" />
    <p>{friend.name}</p>
  </li>
);

export default FriendItem;
