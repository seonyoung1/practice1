import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Noto Sans KR', sans-serif;
        background-color: ${(props) => props.theme.backgroundColor};
        color: ${(props) => props.theme.textColor};
        line-height: 1.5;
    }
    a{
        text-decoration: none;
    }
    *{
        box-sizing: border-box;
        font-family: 'Noto Sans KR', sans-serif;
    }
    ul,
    li{
        list-style-type: none;
    }
`;

export const Container = styled.div`
	padding: 0 20px;
	max-width: 480px;
	margin: 0 auto;
`;

export const Header = styled.header`
	height: 15vh;
	display: flex;
	justify-content: center;
	align-items: center;
	.title {
		font-size: 48px;
		font-weight: bold;
		color: ${(props) => props.theme.accentColor};
	}
`;

export const List = styled.div``;

export const Item = styled.li`
	//background-color: white;
	border-radius: 15px;
	margin-bottom: 10px;
	background-color: ${(props) => props.theme.cardBgColor};
	a {
		padding: 20px;
		transition: color 0.2s ease-in;
		color: ${(props) => props.theme.textColor};
		//color: #333;
		display: flex;
		align-items: center;
	}
	img {
		width: 32px;
		height: auto;
		margin-right: 15px;
	}
	&:hover {
		a {
			color: ${(props) => props.theme.accentColor};
		}
	}
`;

export const ToggleDark = styled.button`
	width: 56px;
	height: 24px;
	border-radius: 12px;
	background-color: #000;
	display: flex;
	align-items: center;
	padding: 4px;
	position: absolute;
	right: 10px;
	top: 10px;
	border: 0;
	span{
		font-size: 0.6em;
		padding-left: 20px;
		color: #fff;
	}
	&:before {
		content: '';
		width: 18px;
		height: 18px;
		border-radius: 50%;
		transition: left 0.2s ease;
		position: absolute;
		left: 3px;
		top: 3px;
		background-color: #666;
	}
	&.light {
		background-color: #ddd;
		&:before {
			left: 36px;
			background-color: #fff;
		}
		span{
			color: #000;
			padding-left: 3px;
		}
	}
`;

export const ButtonHome = styled.button`
	background: transparent;
	border: 0;
	color: ${props => props.theme.textColor};
	padding: 15px 0;
	margin-bottom: 10px;
	cursor: pointer;
`;