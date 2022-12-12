import styled from '@emotion/styled';

export const Line = styled.tr`
	font-size: 16px;
	color: rgb(136, 137, 138);
	& td {
		padding: 5px 10px;
		text-align: center;
	}
	&:nth-of-type(even) {
		background-color: rgb(245, 241, 244);
	}
`;