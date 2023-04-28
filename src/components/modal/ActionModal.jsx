import React from 'react'
import styled from 'styled-components'

const StyledModal = styled.div`
  position: absolute;
  right: 0;
  height: 110px;
  width: 260px;
  padding: 1rem 0;
  border-bottom-left-radius:10px ;
  border-top-left-radius:10px ;
  border-bottom-right-radius:10px ;
  background-color: ${({ theme }) => theme.primaryLightTheme.bgColorLight};
  box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 6px 9px rgba(0,0,0,.2);
  z-index: 10;
  opacity: 0.95;
`;

export const ActionModal = ( {children, onClick=()=>{}, getModalStatus} ) => {
  return (
    <StyledModal onClick={onClick} className={getModalStatus ? "modalOn" : "modalOff"}>
      {children}
    </StyledModal>
  )
}
