import React from 'react'
import ListIcon from '@mui/icons-material/List';
import MessageDropDown from '../SubComponent/MessageDropDown';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import TaskDropDown from '../SubComponent/TaskDropDown';
import TuneTwoToneIcon from '@mui/icons-material/TuneTwoTone';
import AlertDropDown from '../SubComponent/AlertDropDown';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import UserDropDown from '../SubComponent/UserDropDown';

function Navbar({sidebar,side}) {
    const mess =`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...`
const messageArray =[
    {name:'John Doe' ,time: 'Today' ,message : mess},
    {name:'John Smith' ,time: 'Yesterday' ,message : mess},
    {name:'John Smith' ,time: 'Yesterday' ,message : mess}
]

const ProgressArray =[
    {name:'Task 1' , value : 60},
    {name:'Task 2' , value : 28},
    {name:'Task 3' , value : 62},
    {name:'Task 3' , value : 85}
];

const AlertArray =[
    {val:0 ,time:4},
    {val:3 ,time:12},
    {val:0 ,time:6},
    {val:0 ,time:4},
    {val:0 ,time:4}
];


 const menu =[<MessageDropDown data={messageArray} icon={<LocalPostOfficeIcon fontSize='inherit' /> } /> , <TaskDropDown data={ProgressArray} icon={<TuneTwoToneIcon fontSize='inherit' />} /> ,<AlertDropDown data={AlertArray} icon={<NotificationsActiveIcon fontSize='inherit' />} />]
    return (
        <div className=' flex fixed bg-white z-50 w-screen  flex-col md:flex-row'>
            <div className=' md:w-72 py-3 flex flex-row bg-red-500 text-white font-semibold '> 
            <p className=' w-full text-2xl pl-6 text-left'>Brand</p>
            <p className=' block md:hidden'><ListIcon fontSize='inherit' /></p>
            </div>
            <div className=' flex border-b border-gray-400 flex-row justify-between w-full pl-4 pr-8 items-center '>
                <div className=''>
                <button onClick={() => {sidebar(prev => !prev)}} className={` ${side ? 'text-red-500' : ''} text-2xl hover:text-gray700 `}><ListIcon fontSize='inherit' /></button>
                </div>
                <div className=' flex justify-center items-center lg:   space-x-2 flex-row'>
                    {menu.map(item => item )}
                    <UserDropDown  user={`Anmol`} />
                </div>
            </div>
           
        </div>
    )
}

export default Navbar
