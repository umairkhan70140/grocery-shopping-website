import React from 'react'
import Heading from '../Heading/Heading'
import { PiFactoryFill, PiPlantLight } from "react-icons/pi";
import { BsTruckFrontFill } from "react-icons/bs";
import { SlBadge } from "react-icons/sl";
import { TbCircleNumber1Filled ,TbCircleNumber2Filled ,TbCircleNumber3Filled,TbCircleNumber4Filled} from "react-icons/tb";

function Process() {
    const rendersteps = Steps.map((items=>{
        return(
            <div>

               <div className='flex items-center'>
                <span className='flex justify-center items-center h-15 w-15 outline-dashed rounded-full text-7xl out-black-500 outline-4 '>{items.number}</span>
               </div>
               <div className=''>
                <span className='flex bg-blue-600 w-8 h-8 justify-center items-center mt-5 rounded-full ml-10'>{items.icon}</span>
               </div>
               <div className='w-80'>
                <h3 className='text-2xl font-bold ml-15 mt-5'>{items.tittle}</h3>
                <p className='ml-20 mt-3'>{items.para}</p>
               </div>

            </div>
        )
    }))
  return (
    <div>
        <section className='max-w-[1400px] mx-auto px-10 py-20'>
            <Heading Highlight="Our" Heading="Process"/>
           {/* render steps */}
           <div className='flex mt-20 flex-wrap justify-center '>
            {rendersteps}
           </div>
        </section>
    </div>
  )
}

export default Process;


const Steps = [
    {
        id : "1",
        number : <TbCircleNumber1Filled />,
        tittle : "Sourcing",
        para : "it is a long established fact that a reader",
        icon : <PiPlantLight />
    },
    {
        id : "2",
        number : <TbCircleNumber2Filled />,
        tittle : "Manufacturing",
        para : "it is a long established fact that a reader",
        icon : <PiFactoryFill />
    },
    {
        id : "3",
        number : <TbCircleNumber3Filled />,
        tittle : "Quality Controle",
        para : "it is a long established fact that a reader",
        icon : <SlBadge /> 
    },
    {
        id : "4",
        number : <TbCircleNumber4Filled />,
        tittle : "Logistic",
        para : "it is a long established fact that a reader",
        icon : <BsTruckFrontFill />
    },
    
]
