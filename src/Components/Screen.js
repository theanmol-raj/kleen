import React, { useState } from 'react'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import VerifiedIcon from '@mui/icons-material/Verified';
import ForumIcon from '@mui/icons-material/Forum';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import CourseScreens from '../Screens/SubScreens/Course'
import BadgesScreens from '../Screens/SubScreens/Badges'
import CertificateScreens from '../Screens/SubScreens/Certificate';
import ChallengeScreens from '../Screens/SubScreens/Challenge'
import CourseContentScreens from '../Screens/SubScreens/CourseContent'
import ForumScreens from '../Screens/SubScreens/Forum'
import ProfileScreens from '../Screens/SubScreens/Profile'
import SettingsScreens from '../Screens/SubScreens/Settings'
import StudentManagementScreens from '../Screens/SubScreens/StudentManagement'
import VideoLectureScreens from '../Screens/SubScreens/VideoLecture'







function Screen({side,st}) {
    const[renderScreen,SetrenderScreen] = useState(0)

    const OptionArray =[{name:"Course" ,icon: <LibraryBooksIcon fontSize='inherit'  />},
    {name:"Certificate " ,icon: <CardMembershipIcon fontSize='inherit'  />},{name:"Challenge" ,icon: <EmojiEventsIcon fontSize='inherit' />},{name:"Course Content" ,icon: <ContentCopyIcon fontSize='inherit' />},{name:"Video Lecture" ,icon: <OndemandVideoIcon fontSize='inherit'  />},{name:"Badges " ,icon:<VerifiedIcon fontSize='inherit'  /> },
    {name:"Forum" ,icon: <ForumIcon fontSize='inherit'  />},{name:"Student Management" ,icon: <ManageAccountsIcon fontSize='inherit'  />},{name:"Profile" ,icon: <PersonIcon fontSize='inherit'  />},{name:"Settings" ,icon: <SettingsIcon fontSize='inherit'  />}]
    
    
    
    const ScreenArray =[<CourseScreens st={st} /> ,<CertificateScreens/>,<ChallengeScreens />,<CourseContentScreens/>,<VideoLectureScreens/>,<BadgesScreens />,<ForumScreens/>,<StudentManagementScreens/>,<ProfileScreens />,<SettingsScreens />];



    function Options(){
        return (<div className='flex flex-col w-full'>
            {OptionArray.map((x,y)=> <button key={y} onClick={()=>{SetrenderScreen(y)}} className={` ${renderScreen === y ? ' text-white' : 'text-gray-500'} whitespace-nowrap w-full hover:text-gray-400  font-medium border-b border-gray-800 text-left py-3 `}><span className={` ${renderScreen === y ? ' text-red-500' : ''} pl-5 text-xl pr-3`}>{x.icon}</span>{x.name}</button>)}
        </div>)
    }
    return (
        <div className='flex flex-row  bg-black h-full '>
            <div className={` ${side? ' md:w-72' : ' w-0'} py-2 transform transition-width duration-500 ease-out flex flex-row sidebar  font-semibold `}> 
            {side && <Options  />}
            </div>
            <div className={` ${side? ' ' : ' ml-0'} py-2 flex w-full flex-row bg-gray-300  font-semibold `}> 
                    { ScreenArray[renderScreen]}
            </div>
            
        </div>
    )
}

export default Screen
