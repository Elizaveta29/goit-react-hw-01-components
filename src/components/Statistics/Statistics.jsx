import PropTypes from 'prop-types';
import { StatisticItem } from 'components/StatisticItem/StatisticItem';
import { StatisticsSection, StatisticsTitle, StatisticsList } from 'components/Statistics/Statistics.styled';

export const Statistics = ({ title, stats }) => {
	return (
		<StatisticsSection>
			{title && <StatisticsTitle>{title}</StatisticsTitle>}

			<StatisticsList>
				{stats.map(stat => (
					<StatisticItem
						key={stat.id}
						label={stat.label}
						percentage={stat.percentage}
					/>
				))}
			</StatisticsList>
		</StatisticsSection>
	);
};

Statistics.propTypes = {
	title: PropTypes.string,
	stats: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
		})
	),
};