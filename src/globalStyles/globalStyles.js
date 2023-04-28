import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  body{
        background-color: ${props => props.theme.primaryLightTheme.alabaster};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`

export const StyledContainer = styled.main`
    width: 630px;
    position: relative;
    background-color: ${props => props.theme.primaryLightTheme.bgColorLight};
    box-shadow: 0 0.063rem 0.188rem rgb(31 50 81 / 12%), 0 0.063rem 0.125rem rgb(31 50 81 / 24%);
    border-radius: 20px;
    padding: 2rem;
`

export const StyledNotificationBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    
    div:first-of-type{
        display: flex;
        align-items: center;
        gap: .5rem;
        
        span{
            background-color: ${props => props.theme.primaryLightTheme.notificationBlue};
            padding: .3rem;
            border-radius: 5px;
            color: ${props => props.theme.primaryLightTheme.fColor};
        }
        
        h2{
            font-size: 25.6px;
            font-weight: 600;
        }
    }

    span:last-of-type{
        display: flex;
        align-items: center;
        gap: .5rem;
    }
`
export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    gap: .5rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 15px;
    svg{
        margin-bottom: .2rem;
    }
`;

export const NotificationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

`