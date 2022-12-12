import styled from '@emotion/styled'

export const Item = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px;
	background-color: ${() => `#${Math.floor(
					Math.random() * 16777215
				).toString(16)}`}
`

export const Label = styled.span`
	font-size: 14px;
	margin-bottom: 5px;
`

export const Percentage = styled.span`
	font-size: 28px;
`