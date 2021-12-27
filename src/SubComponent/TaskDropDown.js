import React ,{useState ,useEffect} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function ProgressBar({x}){
    const [progress, setProgress] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(x);
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box className={x<=28 ? `text-red-500` : (x >= 75 ? `text-green-500` : ` text-blue-800 `)} sx={{ width: '100%' }}>
      <LinearProgress color='inherit' variant="determinate" value={progress} />
    </Box>
  );

}
function Task(props){
    var {name ,value} = props.item;
    return(<div className=' px-4  py-4 pb-6 border-b w-60 hover:bg-gray-100 cursor-pointer'>
        <div className='flex py-2 flex-row justify-between'>
            <p className=' text-sm font-bold italic'>{name}</p>
            {<p className=' text-sm  italic'>{value}% complete</p>}
        </div>
        <ProgressBar x={value}   />
    </div>)
}

export default function TaskDropDown(props) {
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
        {props.data.map((item,index)=>(<Task key={index} item={item} />))}
      </Menu>
    </div>
  );
}