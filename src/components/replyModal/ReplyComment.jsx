import React from 'react'
import styled from 'styled-components'
import { Button } from '../pageContainer/notificationBar/NotificationBar'
import img from '/111819901.jpg'

const CommentReplyWrapper = styled.div`
    display: flex;
    height: 100px;
    padding: 1rem;
    gap: 1rem;

    div{ 
        margin-left: 1rem;
        border-left: solid 1.5px;
        border-color: ${props => props.theme.primaryLightTheme.lightGray};

        img{
        height: 36px;
        width: 36px;
        border-radius: 50%;
        margin-left: 1rem;
    
    }

    }
    input{
        border: solid .5px;
        border-color: ${props => props.theme.primaryLightTheme.lightGray};
        background-color: ${({ theme }) => theme.primaryLightTheme.fColor};
        width: 80%;
        outline: none;
        padding: 0 1rem;
        font-size: 13px;
    }

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        text-transform: uppercase;
        font-size: 13px;
        background-color: ${({ theme }) => theme.primaryLightTheme.coolBlue};
        color: ${({ theme }) => theme.primaryLightTheme.fColor};
        font-weight: 600;
        height: 30px;
        width: 15%;
    }
`
export const ReplyComment = ({ isOpen, onClick= ()=>{}, getFunction }) => {
  return (
    <CommentReplyWrapper isOpen={isOpen} onClick={onClick} getFunction={getFunction}>
        <div>
            <img src={img} alt="" />
        </div>
        <input placeholder='Add comment...'/>
        <Button 
            buttonName='send'
            onClick={getFunction}
        />
      
    </CommentReplyWrapper>
  )
}
