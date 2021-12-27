import React ,{useState} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';



export default function UserDropDown(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <span className='text-gray-600 text-sm  hover:text-black'> <AccountCircleIcon />{props.user} <KeyboardArrowDownIcon fontSize='inherit' /></span>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <div className=' flex flex-col w-40 px-2 py-2'>
        <button className=' text-sm font-light text-left pl-4 py-2 my-2 ' onClick={handleClose}><AccountCircleIcon/> Profile</button>
        <button className=' text-sm font-light text-left pl-4 py-2 my-2 ' onClick={handleClose}><SettingsIcon/> Settings</button>
        <button className=' text-sm font-light text-left pl-4 py-2 my-2 ' onClick={handleClose}><LogoutIcon />Logout</button>          
        </div>
      </Menu>
    </div>
  );
}