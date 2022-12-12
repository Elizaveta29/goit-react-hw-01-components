//------------------------CSS MODULE----------------------------

// import css from './Profile.module.css';
// import PropTypes from 'prop-types';

// export const Profile = ({ username, tag, location, avatar, stats }) => {
// 	return (
// 		<div className={css.profile}>
// 			<div className={css.description}>
// 				<img src={avatar} alt="User avatar" className={css.avatar} />
// 				<p className={css.name}>{username}</p>
// 				<p className={css.tag}>@{tag}</p>
// 				<p className={css.location}>{location}</p>
// 			</div>

// 			<ul className={css.stats}>
// 				<li>
// 					<span className={css.label}>Followers </span>
// 					<span className={css.quantity}>{stats.followers}</span>
// 				</li>
// 				<li>
// 					<span className={css.label}>Views </span>
// 					<span className={css.quantity}>{stats.views}</span>
// 				</li>
// 				<li>
// 					<span className={css.label}>Likes </span>
// 					<span className={css.quantity}>{stats.likes}</span>
// 				</li>
// 			</ul>
// 		</div>
// 	);
// };

// Profile.propTypes = {
// 	username: PropTypes.string.isRequired,
// 	tag: PropTypes.string.isRequired,
// 	location: PropTypes.string.isRequired,
// 	avatar: PropTypes.string.isRequired,
// 	stats: PropTypes.object.isRequired,
// };


//------------------------WITH EMOTION----------------------------

import { Container, Description, Image, UserName, Tag, Location, List, Item, Label, Quantity } from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
	return (
		<Container>
			<Description>
				<Image src={avatar} alt="User avatar"/>
				<UserName>{username}</UserName>
				<Tag>@{tag}</Tag>
				<Location>{location}</Location>
			</Description>

			<List>
				<Item>
					<Label>Followers </Label>
					<Quantity>{stats.followers}</Quantity>
				</Item>
				<Item>
					<Label>Views </Label>
					<Quantity>{stats.views}</Quantity>
				</Item>
				<Item>
					<Label>Likes </Label>
					<Quantity>{stats.likes}</Quantity>
				</Item>
			</List>
		</Container>
	);
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired
}