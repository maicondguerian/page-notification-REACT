import React from 'react'
import { StyledButton, StyledNotificationBar } from '../../../globalStyles/globalStyles'
import { MdDoneAll, MdDeleteSweep } from "react-icons/md";


export const Button = ( { buttonName = 'custonName', Icon, size, onClick=()=>{}, id, disabled, color } ) => {
    return (
        <>
            <StyledButton onClick={onClick} id={id} disabled={disabled}>
                {Icon ? <Icon size={size} color={color}/> : <></>}
                {buttonName}
            </StyledButton>
        </>
    );
};


export const NotificationBar = ( {getNotificationCounter, GetSetCounterFunction, getRemoveAllFunction} ) => {
  

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
                <Button 
                    buttonName='Remove all'
                    onClick={getRemoveAllFunction}
                    Icon={MdDeleteSweep}
                    size={22}
                    color={'#000c'}
                />
        </StyledNotificationBar>
    );
};
