import React, { useState } from 'react'

function Certificate() {

    const[certificate ,SetCertificate] = useState(null);
    function HandleChange(e){
        const {name ,files} = e.target;
        SetCertificate({[name]:files[0]})

    }
    function HandleUpload(e){
        console.log(certificate);
        e.preventDefault()
      }
  
  

    return (
        <div className=' w-full mx-auto h-screen   mt-24'>
            <form className=' flex pt-8 rounded-3xl shadow-2xl bg-white px-8 pb-8 flex-col mx-8 lg:mx-32'>
            <p className=' text-center text-4xl'>{`Upload Certificate`}</p>
            <div className="flex mt-8">
        <div className="rounded-lg shadow-xl bg-gray-50 w-full ">
            <div className="m-4">
                <label className="inline-block mb-2 text-gray-500">Upload
                    Image(jpg,png,jpeg)</label>
                <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col w-full h-40 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                        <div className="flex flex-col items-center justify-center pt-2">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="w-20 h-20 pt-4 mt-2 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fillRule="evenodd"
                                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                    clipRule="evenodd" />
                            </svg>
                            <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                Select a photo</p>
                        </div>
                        <input  onChange={HandleChange} name='course_image' type="file" className="opacity-0" />
                    </label>
                </div>
            </div>
        </div>
    </div>
                   <button  className=' hover:shadow-2xl transform duration-300 ease-out hover:scale-95 mt-10 rounded-2xl bg-blue-500 py-4 text-2xl font-bold text-white' onClick={HandleUpload}>Upload Challenge</button> 
                                        
                    
                </form>
        </div>
    )
}

export default Certificate
