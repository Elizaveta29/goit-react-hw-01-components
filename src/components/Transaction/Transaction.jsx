import PropTypes from 'prop-types';
import { Line } from './Transaction.styled';

export const Transaction = ({ type, amount, currency }) => {
	return (
		<Line>
			<td>{type}</td>
			<td>{amount}</td>
			<td>{currency}</td>
		</Line>
	);
};

Transaction.propTypes = {
	type: PropTypes.string,
	amount: PropTypes.string,
	currency: PropTypes.string,
};