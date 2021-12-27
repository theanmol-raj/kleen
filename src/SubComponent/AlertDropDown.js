import React ,{useState} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ChatIcon from '@mui/icons-material/Chat';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import TuneTwoToneIcon from '@mui/icons-material/TuneTwoTone';


function Alerts({data}){
    
    return <div className='px-4 py-2 w-72'>
            <div className='flex py-4 px-1 flex-row justify-between'>
               <a className=' text-sm ' href=''><ChatIcon className='mr-2' fontSize='inherit' />{data[0].val? data[0].val : '' }New Comment</a>
               <p className='text-sm italic font-light'>{data[0].time} mins</p>
            </div>
            <div className='flex py-4 px-1 flex-row justify-between'>
               <a className=' text-sm ' href=''><TwitterIcon className='mr-2' fontSize='inherit' />{data[1].val? data[1].val : '' }New Follower</a>
               <p className='text-sm italic font-light'>{data[1].time} mins</p>
            </div>
            <div className='flex py-4 px-1 flex-row justify-between'>
               <a className=' text-sm ' href=''><EmailIcon className='mr-2' fontSize='inherit' />{data[2].val? data[2].val : '' }Message Sent</a>
               <p className='text-sm italic font-light'>{data[2].time} mins</p>
            </div>
            <div className='flex py-4 px-1 flex-row justify-between'>
               <a className=' text-sm ' href=''><TuneTwoToneIcon className='mr-2' fontSize='inherit' />{data[3].val? data[3].val : '' }New Task</a>
               <p className='text-sm italic font-light'>{data[3].time} mins</p>
            </div>
            <div className='flex py-4 px-1 flex-row justify-between'>
               <a className=' text-sm ' href=''><CloudUploadIcon className='mr-2' fontSize='inherit' />{data[4].val? data[4].val : '' }Server Rebooted</a>
               <p className='text-sm italic font-light'>{data[4].time} mins</p>
            </div>
    </div>

  
}

export default function AlertDropDown(props) {
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
        <span className='text-gray-600 text-lg  hover:text-black'>{props.icon} <KeyboardArrowDownIcon fontSize='inherit' /></span>
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
        <Alerts data={props.data} />
        <button className=' w-full hover:bg-gray-100 text-sm font-medium capitalize pt-2'>See all Alerts <NavigateNextIcon fontSize='inherit' /></button>
      </Menu>
    </div>
  );
}