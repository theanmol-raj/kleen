import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import Diamond from '../../Images/Diamond.png'
import Gold from '../../Images/Gold.png'
import Silver from '../../Images/Silver.png'
import Bronze from '../../Images/Bronze.png'

function Badges() {
    
    function BadgesCard({item}){
        return (
            <div className=' bg-white w-5/6 shadow-2xl transform hover:scale-105 cursor-pointer transition duration-500  mx-auto rounded-3xl'>
                <div className=' bg-white relative rounded-2xl'>
                    <p className=' text-xl border-2 border-blue-200 top-5 w-min whitespace-nowrap rounded-3xl absolute -right-4 bg-white text-gray-600 px-4 shadow-2xl'> <span className=' text-blue-500'><AddIcon fontSize='inherit' />{item.B_exp}</span> EXP</p>
                    <div className='pt-24 px-8'>
                    <img alt='' src={item.B_img} className='  mx-auto h-40 ' />
                    <p className=' pt-4 text-center font font-black text-2xl text-gray-800'>{item.B_name} Badge</p>
                    <p className=' text-center pt-4 text-lg tracking-tighter text-gray-600 font-light'>{item.B_task}</p>
                    <div className={` ${item.B_status ? 'from-blue-800  to-blue-400' : 'from-green-800  to-yellow-500'} w-full rounded-3xl h-2 mt-8 bg-gradient-to-r  `}></div>
                    <p className=' font-mono font-light tracking-tighter text-center text-xl pt-4 text-gray-600 pb-12'>{item.B_status ? `Unlocked` : `LOCKED`}</p>
                    </div>


                </div>

            </div>
        )
    }
    
    
    
    
    const BadgesArr =[{B_exp: 10,B_img : Bronze ,B_name:'BRONZE' , B_task:`Won first place on a verified forum competition` ,B_status:true},{B_exp: 20,B_img : Silver ,B_name:'SILVER' , B_task:`Won first place on a verified forum competition` ,B_status:true} ,{B_exp: 50,B_img : Gold ,B_name:'GOLD' , B_task:`Won first place on a verified forum competition` ,B_status:true},{B_exp: 100,B_img : Diamond ,B_name:'Diamond' , B_task:`Won first place on a verified forum competition` ,B_status:false}]





    return (
        <div className=' w-full h-screen'>
            <p className=' text-5xl text-center  pt-12  bg-white pb-12'>Badges</p>
            <div className=' grid grid-cols-1 gap-4 mt-16  p-6 md:grid-cols-2 xl:grid-cols-4'>
            {BadgesArr.map((item,index) => <BadgesCard key={index} item={item} />)}
        </div>
        </div>
    )
}

export default Badges
