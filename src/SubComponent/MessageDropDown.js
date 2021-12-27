import React ,{useState} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


function Message(props){
    var {name ,time ,message} = props.item;
    return(<div className=' px-4 pb-4 border-b w-60 hover:bg-gray-100 cursor-pointer'>
        <div className='flex py-2 flex-row justify-between'>
            <p className=' text-sm font-semibold italic'>{name}</p>
            <p className=' text-sm  italic'>{time}</p>
        </div>
        <p className=' text-sm  '>{message}</p>
    </div>)
}

function MessageDropDown(props) {
    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    return (
        <div className=' -pb-1'>
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
        {props.data.map((item,index)=>(<Message key={index} item={item} />))}
        <button className=' w-full hover:bg-gray-100 text-sm font-medium capitalize pt-2'>read all messages <NavigateNextIcon fontSize='inherit' /></button>
      </Menu>
        </div>
    )
}

export default MessageDropDown
