import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function CourseContent() {
    function CourseContentCard({item}){
        return(<div className=' w-10/12 my-8  rounded-lg  bg-white border-l-4 border-blue-500'>
            <div className=' pl-6 py-8'>
<div className=' flex flex-row justify-between'>
        <div>
            <p className=' text-4xl'><span className=' text-gray-400'><ArrowRightIcon fontSize='inherit' /></span>Introduction</p>

        </div>
        <div className=' flex flex-row items-center text-2xl pr-8 text-gray-500  space-x-10'>
            <span className=' -mt-1 hover:text-gray-600 cursor-pointer'><SettingsIcon fontSize='inherit' /></span>
            <span className=' -mt-1 hover:text-gray-600 cursor-pointer'><DeleteIcon fontSize='inherit' /></span>
            <span className=' -mt-1 hover:text-gray-600 cursor-pointer'><DragIndicatorIcon fontSize='inherit' /></span>
              
        </div>
</div>
    <p className=' tracking-tight px-8 py-4 text-gray-500 font-light'> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>)
    }


    return (
        <div className='  w-full p-8'>
            <p className=' text-xl text-gray-500'> Content</p>
            <div className=' flex flex-row justify-between'>
                <p className=' text-5xl font-semibold'>Course Online</p>
                <div className=' flex flex-row space-x-8 '>
                    <button className=' text-xl font-bold hover:bg-green-400 bg-green-600 px-8 rounded text-white hover:shadow-2xl transform hover:scale-105 duration-300 ease-out'><AddIcon fontSize='inherit' /> New Section</button>
                    <button className=' text-xl font-bold hover:bg-blue-400 bg-blue-600 px-8 rounded text-white hover:shadow-2xl transform hover:scale-105 duration-300 ease-out'><FileUploadIcon fontSize='inherit' /> Collapse all Section</button>
                    <button className=' text-xl font-bold bg-blue-600 px-8 rounded text-white hover:shadow-2xl transform hover:scale-105 hover:bg-blue-400 duration-300 ease-out'>View Live</button>

                </div>
            </div>
            <div className=' flex flex-row  w-full'>
                    <div className=' w-full h-screen  scrollbar-hide overflow-y-scroll '>
                        <CourseContentCard />
                        <CourseContentCard />
                        <CourseContentCard />
                        <CourseContentCard />
                        <CourseContentCard />
                        <CourseContentCard />
                        <CourseContentCard />
                        <CourseContentCard />
                        <CourseContentCard />
                        <CourseContentCard />
                        <CourseContentCard />


                    </div>
                    <div className=' w-40 lg:w-56 py-6 my-4 xl:w-96'>
                        <p>What can i do over here</p>
                    </div>
            </div>
        </div>
    )
}

export default CourseContent
