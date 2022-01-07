import React,{useState} from 'react'
import AddIcon from '@mui/icons-material/Add';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';


function VideoLecture() {
    const schema = {
        title : "",
        sequence:"",
        description:"",
        course_Video: ""
    }

    const[VideoObj,SetVideoObj] = useState(schema);

    function HandleChange(e){
        console.log() 
        const {name ,value,files} = e.target;
        if(name !=='course_Video'){
        SetVideoObj(prev =>({...prev , [name] :value}))}
        else{
            SetVideoObj(prev =>({...prev , [name] :value}))
        }
    }

    function HandleSubmit(e){
        e.preventDefault()
        console.log(VideoObj);
    }




    const [open, setOpen] = useState(false);
    const handleClose = (e) => {
        setOpen(false);
        e.preventDefault()
      };
      const handleToggle = () => {
        setOpen(!open);
      };


    function VideoStack(){
        return(<div className=' my-2 h-40 w-full flex flex-row   rounded-lg  bg-white border-l-4 border-blue-500'>
            <iframe className='' src="https://www.youtube-nocookie.com/embed/tgbNymZ7vqY" />

        
    </div>)
    }


    function VideoCard({item}){
        return(<div className=' lg:w-10/12 my-8  rounded-lg  bg-white border-l-4 border-blue-500'>
            <div className=' px-6 py-8'>
<div className=' flex flex-row justify-between'>
        <div className=' w-full'>
        <iframe className=' xl:w-full xl:h-96' src="https://www.youtube-nocookie.com/embed/tgbNymZ7vqY" />
        {/* https://www.youtube-nocookie.com/embed/i8eBBG46H8A */}

        </div>
</div>
    <div className=' flex flex-row justify-between'>
    <p className=' text-lg text-gray-500 py-4 font-semibold whitespace-nowrap'> Video 2</p>
    <div className=' px-8'>
    <p className=' text-2xl py-4 font-semibold whitespace-nowrap'> This is just a title</p>
    <p className=' tracking-tight  py-4  text-gray-500 font-light'> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    </div>
            </div>
        </div>)
    }



    return (
        <div className='  w-full p-8'>
             <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        // 
      >
        <div className=' relative bg-white w-10/12 py-8 rounded-3xl'>
            <button onClick={handleClose} className=' absolute text-4xl right-10 top-5 text-gray-400'><CloseIcon fontSize='inherite' /></button>
            <div className=' w-full mx-auto'>
            <div className=' mt-4  mb-8 bg-white px-8 pb-12 pt-10  mx-auto lg:w-5/6 
            xl:w-3/4    rounded-2xl'>
            <p className=' text-center text-gray-700 text-4xl'>Upload Video </p>
                <form className=' flex pt-8 flex-col'>
                <label className="inline-block mb-1 pt-4 pl-4 text-gray-500">Title</label>
                    <input onChange={HandleChange} value={VideoObj.title} name='title' className=' border text-gray-500 font-bold border-gray-50 shadow-lg bg-gray-50 rounded-xl py-2 pl-4' />
                    <label className="inline-block mb-1 pt-4 pl-4 text-gray-500">Sequence Number</label>
                    <input onChange={HandleChange} value={VideoObj.sequence} name='sequence' className='text-gray-500 font-bold border border-gray-50 shadow-lg bg-gray-50 rounded-xl py-2 pl-4' />
                    <label className="inline-block mb-1 pt-4 pl-4 text-gray-500">Description</label>
                    <textarea onChange={HandleChange} value={VideoObj.description} name='description'  rows={3} className=' border text-gray-500 font-bold border-gray-50 pl-4 shadow-xl bg-gray-50 rounded-xl' />
                    <div className="flex mt-8">
        <div className="rounded-lg shadow-xl bg-gray-50 w-full ">
            <div className="m-4">
                <label className="inline-block mb-2 text-gray-500">{VideoObj.course_Video? `${VideoObj.course_Video}` : "Upload Image(jpg,png,jpeg)"}</label>
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
                        <input onChange={HandleChange} value={VideoObj.course_Video}  name='course_Video' type="file" className=" text-gray-500 font-bold opacity-0" />
                    </label>
                </div>
            </div>
        </div>
    </div>

                    <button onClick={HandleSubmit} className=' hover:shadow-2xl transform duration-300 ease-out hover:scale-95 mt-10 rounded-2xl bg-blue-500 py-4 text-2xl font-bold text-white'>Upload Video</button>
                    
                </form>
            </div>
           </div>
        </div>
      </Backdrop>
            {/* <p className=' text-xl text-gray-500'> Content</p> */}
            <div className=' flex flex-col lg:flex-row justify-between'>
                <p className=' text-5xl pb-8 lg:pb-0 font-semibold'> Video Lectures</p>
                <div className=' flex flex-col lg:flex-row lg:space-x-8 '>
                    <button onClick={handleToggle} className=' my-1 lg:my-0 text-xl font-bold hover:bg-green-400 bg-green-600 px-8 rounded text-white hover:shadow-2xl transform hover:scale-105 duration-300 ease-out'><AddIcon fontSize='inherit' /> New Video</button>
                    
                    <button className=' my-1 lg:my-0 text-xl font-bold bg-blue-600 px-8 rounded text-white hover:shadow-2xl transform hover:scale-105 hover:bg-blue-400 duration-300 ease-out'>View Live</button>

                </div>
            </div>
            <div className=' flex flex-row  pt-8 w-full'>
                    <div className=' w-full '>
                        <VideoCard />
                    </div>
                    <div className=' hidden lg:block  py-6 my-4  w-96 flex-col h-screen  scrollbar-hide xl:flex  overflow-y-scroll'>
                    {/* <p className=''> Side pannel for any actions</p> */}
                        <VideoStack />

                        <VideoStack />
                        <VideoStack />
                        <VideoStack />

                        <VideoStack />
                        <VideoStack />
                        <VideoStack />

                        <VideoStack />
                        <VideoStack />
                        <VideoStack />

                        <VideoStack />
                        <VideoStack />
                        <VideoStack />

                        <VideoStack />
                        <VideoStack />
                        
                    </div>
            </div>
        </div>
    )
}

export default VideoLecture
