
import React from 'react';
import PropTypes from 'prop-types';
import friendListCss from "../FriendList/friendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";



const FriendList = ({ friends }) => (
  <ul className={friendListCss.friendList}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendListItem
        key={id}
        friend={{ avatar, name, isOnline }}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
