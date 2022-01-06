import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Screen from '../Components/Screen'

function HomeScreen({st}) {
    const[sidebar,SetSidebar] = useState(false)
    return (
        <div className=''>
            <Navbar side={sidebar} sidebar={SetSidebar} />
            <div className=' pt-20 md:pt-12 h-full'><Screen st={st} side={sidebar} /></div>
            
        </div>
    )
}

export default HomeScreen
