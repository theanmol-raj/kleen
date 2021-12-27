import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Data from '../Data/SampleCourse';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';

function Course() {

    function ImageUpload(){
        return(<div className="flex mt-8">
        <div className="rounded-lg shadow-xl bg-gray-50 w-full ">
            <div className="m-4">
                <label className="inline-block mb-2 text-gray-500">Upload
                    Image(jpg,png,jpeg)</label>
                <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col w-full h-20 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                        <div className="flex flex-col items-center justify-center pt-2">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fillRule="evenodd"
                                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                    clipRule="evenodd" />
                            </svg>
                            <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                Select a photo</p>
                        </div>
                        <input onChange={HandleChange} name='course_image' type="file" className="opacity-0" />
                    </label>
                </div>
            </div>
        </div>
    </div>)
    }
    
    function DiscreteSlider() {
        return (
          <Box className=' border border-gray-50 shadow-lg bg-gray-50 px-4 rounded-xl py-2 pl-4' sx={{ width: `auto` }}>
            <Slider
            defaultValue={0}
            step={50}
            value={typeof courseData.difficulity === 'number' ? courseData.difficulity : 0}
            onChange={handleSliderChange}
            
          />
            
          </Box>
        );
      }







    const[courseADD,SetADD] = useState(true);
    const schema = {
        _id: "61babf5e61bcf895e428b370",
        name: "",
        heading: "",
        description: "",
        difficulity: 0,
        course_image: null,
        ratings: 5,
        __v: 0
    }
    const[courseData ,SetCourseData] = useState(schema);

///////////////////////////////////////////////////////////////////////////////////////////
    function HandleChange(e){
        const {name ,value,files} =e.target;
        if(name !== 'course_image'){
        SetCourseData(prev =>({...prev , [name] : value}))
    }else{
        SetCourseData(prev =>({...prev , [name] : files[0]}))
    }

    }
    const handleSliderChange = (event, newValue) => {
        SetCourseData(prev => ({...prev ,difficulity:newValue}))
      };
    
///////////////////////////////////////////////////////////////////////////////////////////
    const[CourseArray,SetArray] = useState(Data)

    function CourseItem({item,index}){
        return(<div className=' bg-white m-8 mg:m-0 border shadow-2xl rounded-b-xl rounded-t-2xl'>
            <div className="grid grid-row-2 sm:gap-x-8 md:pb-4">
            <div className="relative ">
            <p className='absolute bottom-4 left-4 text-md font-light bg-white px-4 rounded-3xl'> {item.heading} </p>
            <p className='absolute bottom-4 right-4 text-xl bg-purple-400 px-4 rounded-3xl'> {item.difficulity} </p>
            <button onClick={()=>{DeleteCourse(index)}} className=' text-white bg-red-500 ml-4  px-3 py-2 text-2xl font-semibold  rounded-3xl absolute top-2 right-2'><DeleteSweepIcon fontSize='inherit' /></button>
        <img className=' rounded-t-2xl' src="https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt=""  /></div>
        <div></div></div>
        <div>
        </div>

        <div className="col-start-1 pb-8  row-start-3 space-y-3 px-4">
        <div className='flex flex-row justify-between'>
        <p className=' text-xl '>{item.name}</p>
        <div className='flex flex-row'>
        <svg width="20" height="20" fill="currentColor" className="text-violet-600">
        <path d="M9.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.784-.57-.381-1.81.587-1.81H7.03a1 1 0 00.95-.69L9.05 3.69z" />
      </svg><p className=' text-lg -mt-1 font-light'>{item.ratings}</p>
        </div>
        </div>

        <p className=' text-sm font-light'>{item.description}</p>
    <p className="flex items-center text-black text-sm font-medium">
      <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" className="w-6 h-6 rounded-full mr-2 bg-gray-100" />
      created by the user
    </p>
    <button onClick={()=>{HandleUpdate(item)}} type="button" className="bg-violet-100 text-violet-700 text-base font-semibold px-6 py-2 rounded-lg">Update Course</button>
  </div>

        </div>)
    
    }
    function HandleUpdate(item){
        SetADD(false);
        SetCourseData({
            _id: "61babf5e61bcf895e428b370",
            name: item.name,
            heading: item.heading,
            description: item.description,
            difficulity: item.difficulity,
            course_image: item.course_image,
            ratings: item.rating,
            __v: 0
        })
        
    }
    
    function DeleteCourse(y){
        SetArray(prev => prev.filter((x,z) => z !== y ))


    }
    function HandleSubmit(e){
        console.log(courseData)
        e.preventDefault();
        SetCourseData(schema)

    }

   






    return (
        <div className=' w-full grid lg:grid-cols-2 grid-cols-1 h-full'>
           <div className=' w-full'>
           {courseADD ? '' :<button className='ml-4 bg-white px-4 hover:bg-gray-50  hover:scale-95 duration-300 ease-in-out py-2 font-medium mt-2' onClick={()=>{SetADD(true);SetCourseData(schema)}}>Add Course</button>}
            <div className=' ml-4 mt-4  mb-8 bg-white px-8 pb-12 pt-10 mr-4 lg:w-5/6 
            xl:w-3/4    rounded-2xl'>
            <p className=' text-center text-4xl'>{courseADD ? 'Add' : 'Update'} Course </p>
                <form className=' flex pt-8 flex-col'>
                <label className="inline-block mb-1 pt-4 pl-4 text-gray-500">Name</label>
                    <input onChange={HandleChange} value={courseData.name} name='name' className=' border border-gray-50 shadow-lg bg-gray-50 rounded-xl py-2 pl-4' />
                    <label className="inline-block mb-1 pt-4 pl-4 text-gray-500">Heading</label>
                    <input onChange={HandleChange} value={courseData.heading} name='heading' className=' border border-gray-50 shadow-lg bg-gray-50 rounded-xl py-2 pl-4' />
                    <label className="inline-block mb-1 pt-4 pl-4 text-gray-500">Description</label>
                    <textarea name='description' onChange={HandleChange} value={courseData.description} rows={3} className=' border border-gray-50 pl-4 shadow-xl bg-gray-50 rounded-xl' />
                    <label className="inline-block mb-1 pt-4 pl-4 text-gray-500">Difficulty<span className={` ${courseData.difficulity === 0 ? 'text-green-500' : (courseData.difficulity === 50 ? 'text-yellow-500' : 'text-red-500')} pl-4`}>{courseData.difficulity === 0 ? 'Easy' : (courseData.difficulity === 50 ? 'Intermediate' : 'Advance')}</span></label>
                    <DiscreteSlider />  
                    
                    <ImageUpload />

                    <button onClick={HandleSubmit} className=' hover:shadow-2xl transform duration-300 ease-out hover:scale-95 mt-10 rounded-2xl bg-blue-500 py-4 text-2xl font-bold text-white'>{courseADD ? 'Add' : 'Update'} Course</button>
                    
                </form>
            </div>
           </div>
           {/* list render */}
            <div className=' relative h-screen flex flex-col '>
           <div className=' absolute z-20 bg-gray-300 w-full'> <p className='py-4 text-center text-4xl'>Your Courses</p></div>
                <div className=' overflow-y-scroll scrollbar-hide  pt-20 mb-24  w-full '>
                <div className='grid grid-cols-1 lg:grid-cols-2  gap-2 2xl:mr-4 '>
            {CourseArray.map((item,index) => <CourseItem key={item._id} index={index} item={item} />)}

            </div>
                </div>
                <div className=' absolute bottom-24 z-20 h-20 bg-gradient-to-t from-gray-300   to-transparent w-full'></div>
            </div>


        </div>
    )
}

export default Course


