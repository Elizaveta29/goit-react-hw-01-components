import PropTypes from 'prop-types';
import { Item, Label, Percentage } from './StatisticItem.styled';

export const StatisticItem = ({ label, percentage }) => {
	return (
		<Item
		>
			<Label>{label}</Label>
			<Percentage>{percentage}%</Percentage>
		</Item>
	);
};

StatisticItem.propTypes = {
	label: PropTypes.string.isRequired,
	percentage: PropTypes.number.isRequired,
};