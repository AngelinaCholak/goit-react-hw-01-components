import Profile from './Profile'; 
import user from '../data/user.json';
import data from '../data/data.json';
import Statistics from './Statistics';
import FriendList from "components/FriendList/FriendList";
import friends from '../data/friends.json';
const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      <Statistics
        title="Upload stats"
        stats={data} />
     <FriendList friends={friends} />
    </div>
  );
};
export { App }; 
