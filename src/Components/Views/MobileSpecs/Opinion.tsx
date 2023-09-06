import Image from 'next/image'
import React, { useState } from 'react'
import { BsClock } from 'react-icons/bs';


const Opinion = () => {

  const [activeTab, setActiveTab] = useState(data[0].id);


  return (
    <section>
      <div className='flex mb-10 border-b-2 justify-around items-center gap-3'>
        <div className=''>
          <Image className='pb-1 max-h-[9px] min-h-[9px]' src={'/line1.png'} alt={''} width={100} height={100} />
          <Image className='min-h-[10px]' src={'/line1.png'} alt={''} width={100} height={100} />
        </div>
        <p className='text-xl font-semibold whitespace-nowrap'>SAMSUNG GALAXY Z FOLD3 5G - USER REVIEWS AND OPINIONS </p>
        <div>
          <Image className='pb-1 max-h-[9px]' src={'/line1.png'} alt={''} width={1000} height={1000} />
          <Image className='min-h-[10px]' src={'/line1.png'} alt={''} width={1000} height={1000} />
        </div>
      </div>

      <div className="">
        <div className="mb-6">
          <select
            id="opinions"
            className=" cursor-pointer bg-gray-50 max-w-[120px]  border-gray-300 text-sm rounded-full block w-full px-2 py-2 border dark:placeholder-gray-400 text-black "
          >
            {data.map((item, index) => (
              <option key={index} className=' cursor-pointer' value="" onClick={() => setActiveTab(item.id)}>{item.mostRecent}</option>
            ))}
          </select>
        </div>
        <div className="pb-8">
          {data.map((item, index) => {
            return (
              <div className={`transition-all duration-500 ${activeTab === item.id ? 'opacity-100' : 'opacity-0'}`}
                key={index} >
                {item.recent.map((newItem, idx) => {
                  return (
                    <div key={idx}>
                      {activeTab === item.id && (
                        <div className='mb-5 pb-2 border-b-2'>
                          <div className=' flex justify-between items-center pb-2'>
                            <div className='flex items-center gap-3'>
                              <Image className='min-h-[10px]' src={newItem.img} alt={'user-img'} width={30} height={30} />
                              <span>{newItem.userName}</span>
                            </div>
                            <p className='flex gap-2 items-center'>{newItem.clockIcon}{newItem.date}</p>
                          </div>
                          <p className='pl-10'>{newItem.comment}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex gap-2'>
          <span className='border-2 border-gray-300 cursor-pointer text-sm rounded-md px-4 py-1'>Read All Opinons</span>
          <span className='border-2 border-gray-300 cursor-pointer text-sm rounded-md px-4 py-1'>Post Your opinion</span>
        </div>
        <p>Total User Opinions: <span className=' font-bold pl-3'>367</span></p>
      </div>
    </section >
  )
}

export default Opinion;


const data = [
  {
    id: 1,
    mostRecent: 'Most Relevant',
    recent: [
      {
        img: '/newprofile.svg',
        userName: 'Abdullah Padhana',
        clockIcon: <BsClock />,
        date: '26 July 2023',
        comment: 'The Wifi has stopped working after the latest update. beware before updating. The screen has had bubbles with minimal use. Highly disappointed!'
      },
      {
        img: '/newprofile.svg',
        userName: 'Abdullah Padhana',
        clockIcon: <BsClock />,
        date: '26 July 2023',
        comment: 'The Wifi has stopped working after the latest update. beware before updating. The screen has had bubbles with minimal use. Highly disappointed!'
      },
      {
        img: '/newprofile.svg',
        userName: 'Abdullah Padhana',
        clockIcon: <BsClock />,
        date: '26 July 2023',
        comment: 'The Wifi has stopped working after the latest update. beware before updating. The screen has had bubbles with minimal use. Highly disappointed!'
      },
      {
        img: '/newprofile.svg',
        userName: 'Abdullah Padhana',
        clockIcon: <BsClock />,
        date: '26 July 2023',
        comment: 'The Wifi has stopped working after the latest update. beware before updating. The screen has had bubbles with minimal use. Highly disappointed!'
      },
    ]
  },
  {
    id: 2,
    mostRecent: 'Most Recent',
    recent: [
      {
        img: '/newprofile.svg',
        userName: 'Abdullah Padhana',
        clockIcon: <BsClock />,
        date: '26 July 2023',
        comment: 'The Wifi has stopped working after the latest update. beware before updating. The screen has had bubbles with minimal use. Highly disappointed!'
      },
      {
        img: '/newprofile.svg',
        userName: 'Abdullah Padhana',
        clockIcon: <BsClock />,
        date: '26 July 2023',
        comment: 'The Wifi has stopped working after the latest update. beware before updating. The screen has had bubbles with minimal use. Highly disappointed!'
      },
      {
        img: '/newprofile.svg',
        userName: 'Abdullah Padhana',
        clockIcon: <BsClock />,
        date: '26 July 2023',
        comment: 'The Wifi has stopped working after the latest update. beware before updating. The screen has had bubbles with minimal use. Highly disappointed!'
      },
      {
        img: '/newprofile.svg',
        userName: 'Abdullah Padhana',
        clockIcon: <BsClock />,
        date: '26 July 2023',
        comment: 'The Wifi has stopped working after the latest update. beware before updating. The screen has had bubbles with minimal use. Highly disappointed!'
      },
    ]
  },

]