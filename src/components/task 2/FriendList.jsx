import { FriendListItem } from './FriendListItem';
import style from './FriendList.module.css';


export const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className={style.friendlist}>
        <li className={style.frienditem}>
          {friends.map(item => (
            <FriendListItem
              key={item.id}
              avatar={item.avatar}
              name={item.name}
              isOnline={item.isOnline}
            />
          ))}
        </li>
      </ul>
    </div>
  );
};
