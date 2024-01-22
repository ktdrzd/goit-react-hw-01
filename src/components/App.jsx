import { Profile } from './task 1/Profile';
import userData from './task 1/userData.json';
import { FriendList } from './task 2/FriendList';
import friends from './task 2/friends.json';
import transactions from './task 3/transactions.json';
import {TransactionHistory} from './task 3/TransactionHistory';

function App() {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}

export default App;
