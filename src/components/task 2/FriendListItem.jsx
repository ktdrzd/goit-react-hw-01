import style from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {

  return (
    <div className={style.item}>
      <img className={style.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={style.name}>{name}</p>
      <p className={style.status} style={{ color: isOnline ? 'green' : 'red' }}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};
