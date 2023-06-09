import React, { useEffect, useState } from 'react'
import { Button, NotificationBar } from '../pageContainer/notificationBar/NotificationBar'
import { ActiveModalWrapper, NotificationWrapper, StyledDiv, StyledNotification } from '../../globalStyles/globalStyles'
import { MdFiberNew } from "react-icons/md";
import { HiEllipsisHorizontal } from "react-icons/hi2";
import { ActionModal } from '../modal/ActionModal';
import { BsTrash3Fill, BsFillReplyFill } from "react-icons/bs";
import { ReplyComment } from '../replyModal/replyComment';


export const Notifications = () => {
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            avatar: 'avatar-mark-webber.webp',
            user: "Mark Webber",
            description: "reacted to your recent post My first tournament today!",
            timeAgo: "1m ago",
        },
        {
            id: 2,
            avatar: 'avatar-angela-gray.webp',
            user: "Angela Gray",
            description: "commented on your post about the latest React update",
            timeAgo: "5m ago",
        },
        {
            id: 3,
            avatar: 'avatar-jacob-thompson.webp',
            user: "Jacob Thompson",
            description: "hasjoined your group Chess Club",
            timeAgo: "1 day ago",
        },
        {
            id: 4,
            avatar: 'avatar-rizky-hasanuddin.webp',
            user: "Rizky Hasanuddin ",
            description: `    Hello, thanks for setting up the Chess Club. I 've been a member for a
                few weeks now and I 'm already having Iots of fun and improving my game.` ,
            timeAgo: "5 days ago",
        },
        {
            id: 5,
            avatar: 'avatar-kimberly-smith.webp',
            user: "Kimberly Smith",
            description: "commented on your picture",
            timeAgo: "1 week ago",
        },
        {
            id: 6,
            avatar: 'avatar-nathan-peterson.webp',
            user: "Nathan Peterson ",
            description: `reacted to your recent post 5 end-game strategies to increase your win rate`,
            timeAgo: "2 weeks ago",
        },
        {
            id: 7,
            avatar: 'avatar-anna-kim.webp',
            user: "Anna Kim",
            description: `Ieft the group Chess Club`,
            timeAgo: "2 weeks ago",
        },
    ]);

    const [notificationCounter, setNotificationCounter] = useState(notifications.length);
    const [readAll, setReadAll] = useState(false);

    const handleNotificationCounter = () => {
        setReadAll(true);
        console.log(readAll);
    };

    const handleDeleteAll = (id) => {
        const newList = [...notifications];
        newList.splice(id, newList.length);
        setNotifications(newList);
        setNotificationCounter(newList.length);
    }

    return (
        <NotificationWrapper>
            <NotificationBar
                getRemoveAllFunction={handleDeleteAll}
                getNotificationCounter={notificationCounter}
                GetSetCounterFunction={handleNotificationCounter}
            />
            {notifications.length  === 0 ? <p>Nenhuma notificação para exibir</p> : <></>}
            {notifications.map((notify, index) => (
                <Notification
                    getReadAllFunciton={readAll}
                    getsetNotificationCounter={setNotificationCounter}
                    getFunction={setNotifications}
                    getItemList={notifications}
                    notify={notify}
                    key={index}
                    id={notify.index}
                />
            ))}
        </NotificationWrapper>
    );
};


const Notification = ( { notify, index, getItemList, getFunction, getsetNotificationCounter, id, getReadAllFunciton } ) => {
    const [showModal, setShowModal] = useState(false);
    const [isRead, setIsread] = useState(false);
    const [replyMessage, setReplyMessage] = useState(false);

    const handleIsRead = () => {
        setIsread(true);
    }
    
    const handlerOpenModal = () => {
        setShowModal(true);
        setTimeLeft(5)
    }

    const handlereplyComment = () => {
        setReplyMessage(true);
    };
    
    const handleDeleteItem = (id) => {
        const newList = [...getItemList];
        newList.splice(id, 1);
        getFunction(newList);
        getsetNotificationCounter(newList.length);
        setReplyMessage(false);
    }
    
    const [timeLeft, setTimeLeft] = useState(null);
    
    useEffect(() => {
        let interval
        if (showModal) {
            interval = setInterval(() => {
                setTimeLeft(prevTime => {
                    if (prevTime > 1) {
                        return prevTime - 1;
                    } else {
                        clearInterval(interval);
                        return 'Remove'
                    }
                });
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [showModal]);
    

    return (
        <StyledNotification
            readAll={getReadAllFunciton}
            onClick={handleIsRead}
            isRead={isRead}
        >
            <ul>
                <li key={index}>
                    <span><MdFiberNew size={27} fill='hsl(231, 51%, 33%)' /></span>
                    <img src={notify.avatar} alt="" />
                    <p><a href="#">{notify.user}</a> {notify.description} </p>
                    <StyledDiv
                        isRead={isRead}
                        >
                        <span>{notify.timeAgo}</span>
                        <Button
                            id={'details'}
                            Icon={HiEllipsisHorizontal}
                            size={30}
                            buttonName=''
                            onClick={handlerOpenModal}
                            />
                            <>
                                <ActionModal
                                    onClick={() => setShowModal(false)}
                                    getModalStatus={showModal}
                                    isOpen={showModal}
                                    >
                                    <ActiveModalWrapper>
                                        <Button
                                        onClick={() => {
                                            if(timeLeft === 'Remove'){
                                                handleDeleteItem(id)}}
                                            }
                                            Icon={BsTrash3Fill}
                                            size={17}
                                            buttonName={timeLeft}
                                            disabled={timeLeft !== 'Remove'}
                                            />
                                        <Button
                                            onClick={handlereplyComment}
                                            Icon={BsFillReplyFill}
                                            size={20}
                                            buttonName={'Reply'}
                                            />
                                    </ActiveModalWrapper>
                                </ActionModal>
                            </>
                    </StyledDiv>
                </li>
                {replyMessage && (
                    <ReplyComment 
                        id={'comment'} 
                        isOpen={replyMessage} 
                        getFunction={()=> setReplyMessage(false)}
                    />
                )}
            </ul>
        </StyledNotification>
    );
};