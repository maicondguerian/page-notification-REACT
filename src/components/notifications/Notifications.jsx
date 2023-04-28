import React, { useState } from 'react'
import { NotificationBar } from '../pageContainer/notificationBar/NotificationBar'
import { NotificationWrapper } from '../../globalStyles/globalStyles'

export const Notifications = () => {
    
    const [notificationCounter, setNotificationCounter] = useState(0);

    const handleNotificationCounter = () => {
        setNotificationCounter((prevState) => prevState +1);
    }
  return (
    <NotificationWrapper>
        <NotificationBar 
        counter={notificationCounter}
        GetSetCounterFunction={handleNotificationCounter}
        
        />
        d
    </NotificationWrapper>
  )
}
