import styled from '@emotion/styled'

export const Item = styled.li`
	padding: 10px 15px;
	display: flex;
	width: 200px;
	box-shadow: 0px 0px 5px 0px rgba(0,0,0,.25);
	align-items: center;
	&:not(:last-child){
	margin-bottom: 20px;
}
`;

export const Status = styled.span`
	margin-right: 10px;
	width: 15px;
	height: 15px;
	border-radius: 50%;
	  background-color: ${props =>
    props.isOnline ? 'green' : 'red'};
`;

export const Image = styled.img`
margin-right: 10px;
display: block;
height: auto;
border-radius: 5px;
`;

export const UserName = styled.p`
	margin: 0;
	padding: 0;
	font-size: 26px;
	font-weight: 500;
`;