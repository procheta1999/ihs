import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';

export default function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button {...bindTrigger(popupState)}>
            <MenuIcon/>
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem><a href="https://github.com/procheta1999/ihs.git" target="_blank" style={{color:"GrayText",textDecoration:"none"}}>View source code in Github</a></MenuItem>


          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}