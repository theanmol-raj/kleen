import React, { useState } from 'react'
import { Disclosure ,Transition} from '@headlessui/react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function Challenge() {
const arr =[{
  _id: "61babf5e61bcf895e428b370",
  name: "wues 1",
  description: "desc 1",
  answer :'answer 1'
}]




    function ChallengeCard({item,index}){
        return(
            <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex bg-white justify-between w-full px-4 py-2  font-medium text-left text-gray-900 text-2xl rounded-t-lg hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>{item.name}<ArrowForwardIosIcon
                  className={`${
                    open ? 'transform rotate-90' : ''
                  } w-5 h-5 text-purple-500`}
                /></span>
                
                
              </Disclosure.Button>
              <Transition
        enter="transition duration-300 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
              <Disclosure.Panel className="px-4 rounded-b-lg pt-4 pb-2 text-md bg-gray-200 text-gray-800">
                <p className='pl-2 pb-8'><span className=' font-bold '>Description: </span>{item.description}</p>
                <button onClick={()=>{SetChallenge(item);SetuploadC(false)}} className="bg-white text-violet-700 text-base font-semibold px-6 py-2 rounded-lg">update</button>
                 </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        )

    }







    const schema = {
        _id: "61babf5e61bcf895e428b370",
        name: "",
        description: "",
        answer :''
    }

    const [challenge,SetChallenge] = useState(schema)
    const [uploadC ,SetuploadC] = useState(true)

    const[ChallengesArray ,SetChallengesArray] = useState([])

    function HandleChange(e){
        const {name ,value} =e.target;
        SetChallenge(prev =>({...prev , [name] : value}))
    }
    function HandleUpload(e){
      console.log(challenge);
      e.preventDefault()
    }

    function HandleUpdate(e){
      console.log(challenge);
      e.preventDefault()
    }






    return (
        <div className={` w-full ${ChallengesArray.length <= 2? 'h-screen' : "h -full"}  `}>
           <div className=''>
          
            <div className='  mx-auto mt-4  mb-8 bg-white px-8 pb-12 pt-10  lg:w-5/6 
            xl:w-3/4    rounded-2xl'>
            <p className=' text-center text-4xl'>{`${uploadC ? 'Upload ': 'Update' } Challenge`} </p>
            {!uploadC && <button onClick={()=>{SetuploadC(true);SetChallenge(schema)}} className=' hover:bg-gray-100 text-2xl font-bold px-4 py-2  shadow-xl border'> Upload new Challenge</button>}
                <form className=' flex pt-8 flex-col'>
                <label className="inline-block mb-1 pt-4 pl-4 text-gray-500">Title</label>
                    <input onChange={HandleChange} value={challenge.name}  name='name' className=' border border-gray-50 shadow-lg bg-gray-50 rounded-xl py-2 pl-4' />
                    
                    <label className="inline-block mb-1 pt-4 pl-4 text-gray-500">Description</label>
                    <textarea onChange={HandleChange} value={challenge.description} name='description'  rows={3} className=' border border-gray-50 pl-4 shadow-xl bg-gray-50 rounded-xl' />
                    <label className="inline-block mb-1 pt-4 pl-4 text-gray-500">Answer</label>
                    <input onChange={HandleChange} value={challenge.answer}  name='answer' className=' border border-gray-50 shadow-lg bg-gray-50 rounded-xl py-2 pl-4' />
                    {uploadC ? <button  className=' hover:shadow-2xl transform duration-300 ease-out hover:scale-95 mt-10 rounded-2xl bg-blue-500 py-4 text-2xl font-bold text-white' onClick={HandleUpload}>Upload Challenge</button> :<button  className=' hover:shadow-2xl transform duration-300 ease-out hover:scale-95 mt-10 rounded-2xl bg-blue-500 py-4 text-2xl font-bold text-white' onClick={HandleUpdate}>Update Challenge</button> }
                                        
                    
                </form>
            </div>
           </div>
           {/* list render */}

           <div className=' pt-4 pb-4'>
           <p className=' text-center text-4xl font-bold pb-8'> Your Challenges</p>
           <div className=' mx-4 gap-4 grid grid-cols-1 '>
            {arr.map((x,y) => <div key={y}><ChallengeCard index={y} item={x} /></div>)}
            

           </div>
           </div>
            
           


        </div>
    )
}

export default Challenge
