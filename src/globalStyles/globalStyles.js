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
    padding: 1.5rem 1rem;
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
            background-color: ${props => props.theme.primaryLightTheme.newNotificationDarkBlue};
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
    padding: .1rem;

`;

export const NotificationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

`
export const StyledNotification = styled.div`
    .modalOn {
  animation-name: modalOn;
  animation-duration: .3s;
}

@keyframes modalOn {
    from {
    opacity: 0;
    transform: translateY(-70%);
  }
    to {
    opacity: 0.9;
    transform: translateY(0);
  }
}
    ul{
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;

       a{
            text-decoration: none;
            font-weight: 700;
            color: inherit;
       }
        
        li{
            background-color: ${(props) => (props.isRead || props.readAll ? "bgColorLrght" : "#70b5f933")};
            border-radius: 5px;
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: .6rem 1rem;
            font-size: 14px;
      
            position: relative;
            
            span >svg{
                display: ${(props) => (props.isRead || props.readAll ? "none" : "block")};
            }

            p{
                width: 460px;
            }
            
            :hover {
                background-color: ${(props) => (props.isRead || props.readAll ? "#EBEBEB" : "#D4E9FD")};
                box-shadow: 0 0.063rem 0.188rem rgb(31 50 81 / 12%), 0 0.063rem 0.125rem rgb(31 50 81 / 24%);
                transform: translateX(.5rem);
                transition: transform 0.3s ease-in-out;
            }
            
            img{
                width: 56px;
                cursor: pointer;
            }

            #comment{
                background-color: red;
                top: 0;
                left: 0;
        }
        }
    }
    `
export const StyledDiv = styled(StyledNotification)`
    display: flex;
    gap: 0.5rem;
    font-size: 12px;
    align-items: center;

    

    span{
        width: 40px;
    }

    #details{
        :hover{
            background-color: ${(props) => (props.isRead ? "#D9D9D9" : "#C3D7E9")};
            border-radius: 50%;
        }
    }
`
export const ActiveModalWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    flex-direction: column;
    
   button{
        width: 100%;
        height: 100%;
        color: ${({ theme }) => theme.primaryLightTheme.coolBlue};
        width: 100%;
        height: 100%;
        font-size: 13px;

        :hover{
            background-color: ${(props) => props.theme.primaryLightTheme.brownGray};
        };
    };
    
`