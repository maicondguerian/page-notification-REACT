import React from 'react'
import { StyledButton, StyledNotificationBar } from '../../../globalStyles/globalStyles'
import { MdDoneAll } from "react-icons/md";


const Button = ( { buttonName = 'customName', Icon } ) => {
    return (
        <>
            <StyledButton>
                {buttonName}
                {Icon ? <Icon size={20} /> : <></>}
            </StyledButton>
        </>
    )
}
export const NotificationBar = ( {counter, GetSetCounterFunction} ) => {
    return (
        <StyledNotificationBar counter={counter} onClick={GetSetCounterFunction}>
            <div>
                <h2>
                    Notifications
                </h2>
                <span>
                    {counter}
                </span>
            </div>
                <Button
                    Icon={MdDoneAll}
                    buttonName='Mark all as read'
                    onClick={GetSetCounterFunction}
                />
        </StyledNotificationBar>
    );
};
