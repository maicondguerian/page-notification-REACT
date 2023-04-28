import React from 'react'
import { StyledButton, StyledNotificationBar } from '../../../globalStyles/globalStyles'
import { MdDoneAll } from "react-icons/md";


export const Button = ( { buttonName = 'customName', Icon, size, onClick=()=>{}, id } ) => {
    return (
        <>
            <StyledButton onClick={onClick} id={id}>
                {buttonName}
                {Icon ? <Icon size={size} /> : <></>}
            </StyledButton>
        </>
    )
}
export const NotificationBar = ( {getNotificationCounter, GetSetCounterFunction} ) => {
    return (
        <StyledNotificationBar counter={getNotificationCounter}>
            <div>
                <h2>
                    Notifications
                </h2>
                <span>
                    {getNotificationCounter}
                </span>
            </div>
                <Button
                    Icon={MdDoneAll}
                    buttonName='Mark all as read'
                    onClick={GetSetCounterFunction}
                    size={20}
                />
        </StyledNotificationBar>
    );
};
