import styled from '@emotion/styled'

export const Container = styled.div`
margin-top: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid #e6ecf3;
	border-radius: 5px;
`;

export const Description = styled.div`
padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Image = styled.img`
	margin-bottom: 20px;
	display: block;
	width: 100px;
	height: auto;
  border-radius: 50%;
	`;

export const UserName = styled.p`
margin: 0 0 10px 0;
	font-size: 20px;
	text-transform: uppercase;
	font-weight: 700;
`
	
export const Tag = styled.p`
margin: 0 0 10px 0;
	font-size: 18px;
	color: #474545;
	`;

export const Location = styled.p`
	margin: 0;
	font-size: 18px;
	color: #474545;
`;

export const List = styled.ul`
margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	background-color: rgb(243, 246, 250);
	border-top: 1px solid #e6ecf3;
	border-bottom-right-radius: 5px;
	border-bottom-left-radius: 5px;
`;

export const Item = styled.li`
	padding: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	&:not(:last-child){
	border-right: 1px solid #e6ecf3;
}
`;

export const Label = styled.span`
	font-size: 12px;
	color: #474545;
	margin-bottom: 5px;
`;

export const Quantity = styled.span`
	font-size: 18px;
	font-weight: 700;
`;