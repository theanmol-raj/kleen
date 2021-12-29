import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';    
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AddIcon from '@mui/icons-material/Add';
import Add from '@mui/icons-material/Add';

function Forum() {

    const Post =[{}]


    function PosTCard({item}){
        return(
            <div className=' bg-white w-4/6 my-16 rounded-3xl mx-auto '>
                <div className='flex flex-row'>
                    <div className=' flex  rounded-l-3xl py-4 bg-white px-4 xl:px-8 flex-col'>
                        <p className=' text-4xl text-gray-400'><ArrowUpwardIcon fontSize='inherit' /></p>
                        <p className=' text-4xl text-gray-400 ml-2'>a</p>
                        <p className=' text-4xl text-gray-400'><ArrowDownwardIcon fontSize='inherit' /></p>
                    </div>
                    <div className=' flex pt-6 pl-4 flex-col'>
                        <p className=' font-black text-2xl'>This is a big and long question right here
                        This is a big and long question right hereThis is a big and long question right here</p>
                        <p className=' text-lg pr-16 pb-16 pt-4 text-gray-700 '> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

                        

                    </div>
                   
                </div>
                <hr />
                <div className=' flex pb-8 pt-6 px-24 text-2xl text-gray-600 flex-row justify-between'>
                <><div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60' alt="" />
                        </div>
                        <div className="ml-4">
                        {/* <div className="text-sm text-gray-500">by</div> */}
                          <div className="text-sm font-medium text-gray-900">Jane Cooper</div>
                          <div className="text-sm text-gray-500">on 21 Sept 2022</div>
                          
                        </div>
                      </div></>
                            <><FavoriteBorderIcon fontSize='inherit' />
                            <ChatBubbleOutlineIcon fontSize='inherit' />
                            <Add fontSize='inherit' /></>
                        </div>
            </div>
        )
    }



    return (
        <div className='flex h-screen relative w-full flex-row'>
            <div className='w-full scrollbar-hide  overflow-y-scroll h-screen'>
                
                <PosTCard />
                <PosTCard />
                <PosTCard />
                <PosTCard />
                <PosTCard />
                <PosTCard />
                <PosTCard />
                <PosTCard />
                <PosTCard />
                <PosTCard />
            </div>
            <div className=' xl:w-96 hidden lg:w-60  lg:block px-4 h-screen'>
                <button className=' mt-8 px-10 py-4 bg-blue-500 whitespace-nowrap font-extrabold text-white shadow-2xl'><Add /> Start a new Topic</button>
            </div>

           
        </div>
    )
}

export default Forum
