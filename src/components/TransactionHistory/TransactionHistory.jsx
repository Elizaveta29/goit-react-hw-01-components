import PropTypes from 'prop-types';
import { Transaction } from 'components/Transaction/Transaction';
import { TransactionHistoryTable} from 'components/TransactionHistory/TransactionHistory.styled'

export const TransactionHistory = ({ items }) => {
	return (
		<TransactionHistoryTable>
			<thead>
				<tr>
					<th>Type</th>
					<th>Amount</th>
					<th>Currency</th>
				</tr>
			</thead>

			<tbody>
				{items.map(item => (
					<Transaction
						key={item.id}
						type={item.type}
						amount={item.amount}
						currency={item.currency}
					/>
				))}
			</tbody>
		</TransactionHistoryTable>
	);
};

TransactionHistory.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
		})
	),
};