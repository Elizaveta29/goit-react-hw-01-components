import PropTypes from 'prop-types';
import { Item, Status, Image, UserName } from './FriendListItem.styled';

export const FriendListItem = ({ isOnline, avatar, name }) => {
	return (
		<Item>
			<Status isOnline={isOnline} ></Status>
			<Image
				src={avatar}
				alt="User avatar"
				width="48"
			/>
			<UserName>{name}</UserName>
		</Item>
	);
};

FriendListItem.propTypes = {
	isOnline: PropTypes.bool.isRequired,
	avatar: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};