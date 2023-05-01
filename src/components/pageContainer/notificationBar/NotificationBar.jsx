import React, { useEffect, useState } from 'react'
import { StyledButton, StyledNotificationBar } from '../../../globalStyles/globalStyles'
import { MdDoneAll } from "react-icons/md";


export const Button = ( { buttonName = 'custonName', Icon, size, onClick=()=>{}, id, disabled } ) => {
    return (
        <>
            <StyledButton onClick={onClick} id={id} disabled={disabled}>
                {Icon ? <Icon size={size} /> : <></>}
                {buttonName}
            </StyledButton>
        </>
    );
};


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
                    buttonName={'Mark all as read'}
                    onClick={GetSetCounterFunction}
                    size={20}
                />
        </StyledNotificationBar>
    );
};
