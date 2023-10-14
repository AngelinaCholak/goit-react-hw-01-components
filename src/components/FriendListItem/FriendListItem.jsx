
import React from 'react';
import styles from './friendListItem.module.css';
const FriendItem = ({ friend }) => (
  <li className={styles.friends}>
        <span className={`${styles.status} ${friend.isOnline ? styles.online : styles.offline}`}></span>
        <img
            src={friend.avatar}
            alt="User avatar"
            width="48"
            className={styles.imgFriend}
            />
    <p className={styles.friendsName}>{friend.name}</p>
  </li>
);

export default FriendItem;
