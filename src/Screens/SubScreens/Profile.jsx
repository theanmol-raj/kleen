import React from 'react'

function Profile() {
    return (
        <div className={` w-full `}>
        <div className=''>
       
         <div className='  mx-auto mt-4  mb-8 bg-white px-8 pb-12 pt-10  lg:w-5/6 
         xl:w-1/2   rounded-2xl'>
         <p className=' text-center text-2xl xl:text-4xl'>Edit Information </p>
        
             <form className=' flex pt-8 flex-col'>
             <div className=' w-full'>
             <div className=' w-full'>
                 <img className='2xl:h-64 border-8 border-gray-300 h-24 md:h-32 xl:h-48  mx-auto rounded-full ' src='https://www.w3schools.com/howto/img_avatar.png' alt='' />
             </div>
            <div className='relative pt-4 max-w-min  mx-auto'>
                <button className=' px-8 bg-green-400 whitespace-nowrap py-2'> Choose a  File</button>
            </div>
                <div className='px-4'>
                <div className=' mt-4'>
                    <p className=' text-gray-600 font-bold text-4xl'>Account Information </p>

                </div>
                <div className=' mt-6 flex w-full flex-col'>
                <div className=' w-full py-4 flex flex-row'>
                    <p className=' w-1/2 mx-4 text text-gray-600 text-xl'>First Name</p>
                    <input className=' w-1/2 mx-4 xl:mx-8 border-2 py-1' />
                    </div>
                    <div className=' w-full py-4 flex flex-row'>
                    <p className=' w-1/2 mx-4 text text-gray-600 text-xl'>Last Name</p>
                    <input className=' w-1/2 mx-4 xl:mx-8 border-2 py-1' />
                    </div>
                    <div className=' w-full py-4 flex flex-row'>
                    <p className=' w-1/2 mx-4 text text-gray-600 text-xl'>Email</p>
                    <input className=' w-1/2 mx-4 xl:mx-8 border-2 py-1' />
                    </div>
                    
                </div>  
                <div className=' mt-8'>
                    <p className=' text-gray-600 font-bold text-4xl'>Change Password </p>

                </div>
                <div className=' mt-6 flex w-full flex-col'>
                <div className=' w-full py-4 flex flex-row'>
                    <p className=' w-1/2 mx-4 text text-gray-600 text-xl'>Current PAssword</p>
                    <input className=' w-1/2 mx-4 xl:mx-8 border-2 py-1' />
                    </div>
                    <div className=' w-full py-4 flex flex-row'>
                    <p className=' w-1/2 mx-4 text text-gray-600 text-xl'>New Password</p>
                    <input className=' w-1/2 mx-4 xl:mx-8 border-2 py-1' />
                    </div>
                    <div className=' w-full py-4 flex flex-row'>
                    <p className=' w-1/2 mx-4 text text-gray-600 text-xl'>Confirem Password</p>
                    <input className=' w-1/2 mx-4 xl:mx-8 border-2 py-1' />
                    </div>
                    
                </div>  

                </div>
                <div className=' w-40 mx-auto mt-8'>
                <button className=' px-8 text-white font-bold hover:scale-105 hover:shadow-2xl transform transition duration-500 ease-in-out hover:bg-green-700   bg-green-400 whitespace-nowrap py-2'> Save Changes </button>  
                </div>


             </div>
                
                 
                 
             </form>
         </div>
        </div>
        {/* list render */}

         
        


     </div>
    )
}

export default Profile
