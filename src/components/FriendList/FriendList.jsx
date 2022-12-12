import PropTypes from 'prop-types';
import { List } from './FriendList.styled';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
	return (
		<List>
			{friends.map(friend => (
				<FriendListItem
					key={friend.id}
					isOnline={friend.isOnline}
					avatar={friend.avatar}
					name={friend.name}
				/>
			))}
		</List>
	);
};

FriendList.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
		})
	),
};