import Container from '@/Components/Layout/Container';
import Image from 'next/image'
import React, { useState } from 'react'
import { BsClock } from 'react-icons/bs';


const Opinion = () => {

  const [activeTab, setActiveTab] = useState(data[0].id);
  const [openedTab, setOpenedTab] = useState(null);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [adminReply, setAdminReply] = useState(''); // Step 1: Admin's reply state
  const [comments, setComments] = useState([
    {
      id: 1,
      img: '/newprofile.svg',
      userName: 'Abdullah Padhana',
      reply: 'Reply',
      clockIcon: <BsClock />,
      date: getCurrentDate(),
      comment: 'The Wifi has stopped working after the latest update. beware before updating. The screen has had bubbles with minimal use. Highly disappointed!'
    }
  ]);

  const handleReply = (id: any) => {
    setOpenedTab(id);
  }

  const toggleCommentBox = () => {
    setShowCommentBox(!showCommentBox);
  }

  // Function to add a new comment
  const addComment = () => {
    const newCommentId = comments.length + 1;
    const newComment = {
      id: newCommentId,
      img: '/newprofile.svg',
      userName: 'New User',
      reply: 'Reply',
      clockIcon: <BsClock />,
      date: 'New Date',
      comment: 'New Comment Text'
    };
    setComments([...comments, newComment]);
  }
  
  function getCurrentDate(): string {
    const currentDate: Date = new Date();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return currentDate.toLocaleDateString(undefined, options);
  }

  return (
    <section>
      <Container>
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
                          <div className='mb-5 pb-2 border-b-[3px]'>
                            <div className=' flex justify-between items-center pb-2'>
                              <div className='flex items-center gap-3'>
                                <Image className='min-h-[10px]' src={newItem.img} alt={'user-img'} width={30} height={30} />
                                <span>{newItem.userName}</span>
                              </div>
                              <p className='flex gap-2 items-center'>{newItem.clockIcon}{newItem.date}</p>
                            </div>
                            <p className='pl-10 pb-2'>{newItem.comment}</p>
                            <span className='ml-10 py-1 px-3 font-semibold text-sm cursor-pointer bg-opacity-30 bg-[#A9D9A2] rounded-full text-black'
                              onClick={() => handleReply(newItem.id)}
                            >{newItem.reply}</span>
                            {openedTab === newItem.id && (
                              <div>
                                <input className='block border-2 border-gray-200 outline-none px-3 py-1 w-full ml-10 mt-5 max-w-[1030px] ' placeholder='Enter Reply Here' type="text" />
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              );
            })}
            {comments.map((newItem, idx) => (
              <div key={idx} className='mb-5 pb-2 border-b-[3px]'>
                <div className='flex justify-between items-center pb-2'>
                  <div className='flex items-center gap-3'>
                    <Image className='min-h-[10px]' src={newItem.img} alt={'user-img'} width={30} height={30} />
                    <span>{newItem.userName}</span>
                  </div>
                  <p className='flex gap-2 items-center'>{newItem.clockIcon}{newItem.date}</p>
                </div>
                <p className='pl-10 pb-2'>{newItem.comment}</p>
                <span className='ml-10 py-1 px-3 font-semibold text-sm cursor-pointer bg-opacity-30 bg-[#A9D9A2] rounded-full text-black'
                  onClick={() => handleReply(newItem.id)}
                >
                  {newItem.reply}
                </span>
                {openedTab === newItem.id && (
                  <div>
                    <input className='block border-2 border-gray-200 outline-none px-3 py-1 w-full ml-10 mt-5 max-w-[1030px] ' placeholder='Enter Reply Here' type="text" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className='flex justify-between items-center bg-gray-200 pb-3 pt-6 px-3'>
          <div className='flex gap-2 '>
            <span className='border-2 border-gray-300 bg-white cursor-pointer text-sm rounded px-4 py-1 font-semibold'>Read All Opinons</span>
            <button
              className='border-2 border-gray-300 bg-white cursor-pointer text-sm rounded px-4 py-1 font-semibold'
              onClick={addComment}
            >
              Post Your Opinion
            </button>          </div>
          <p>Total User Opinions: <span className=' font-bold pl-3'>367</span></p>
        </div>
      </Container>
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
        id: 1,
        img: '/newprofile.svg',
        userName: 'Abdullah Padhana',
        reply: 'Reply',
        clockIcon: <BsClock />,
        date: '26 July 2023',
        comment: 'The Wifi has stopped working after the latest update. beware before updating. The screen has had bubbles with minimal use. Highly disappointed!'
      },
      {
        id: 2,
        img: '/newprofile.svg',
        userName: 'Abdullah Padhana',
        reply: 'Reply',
        clockIcon: <BsClock />,
        date: '26 July 2023',
        comment: 'The Wifi has stopped working after the latest update. beware before updating. The screen has had bubbles with minimal use. Highly disappointed!'
      },
      {
        id: 3,
        img: '/newprofile.svg',
        userName: 'Abdullah Padhana',
        reply: 'Reply',
        clockIcon: <BsClock />,
        date: '26 July 2023',
        comment: 'The Wifi has stopped working after the latest update. beware before updating. The screen has had bubbles with minimal use. Highly disappointed!'
      },
      {
        id: 4,
        img: '/newprofile.svg',
        userName: 'Abdullah Padhana',
        reply: 'Reply',
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
        id: 1,
        img: '/newprofile.svg',
        userName: 'Abdullah Padhana',
        reply: 'Reply',
        clockIcon: <BsClock />,
        date: '26 July 2023',
        comment: 'The Wifi has stopped working after the latest update. beware before updating. The screen has had bubbles with minimal use. Highly disappointed!'
      },
      {
        id: 2,
        img: '/newprofile.svg',
        userName: 'Abdullah Padhana',
        reply: 'Reply',
        clockIcon: <BsClock />,
        date: '26 July 2023',
        comment: 'The Wifi has stopped working after the latest update. beware before updating. The screen has had bubbles with minimal use. Highly disappointed!'
      },
      {
        id: 3,
        img: '/newprofile.svg',
        userName: 'Abdullah Padhana',
        reply: 'Reply',
        clockIcon: <BsClock />,
        date: '26 July 2023',
        comment: 'The Wifi has stopped working after the latest update. beware before updating. The screen has had bubbles with minimal use. Highly disappointed!'
      },
      {
        id: 4,
        img: '/newprofile.svg',
        userName: 'Abdullah Padhana',
        reply: 'Reply',
        clockIcon: <BsClock />,
        date: '26 July 2023',
        comment: 'The Wifi has stopped working after the latest update. beware before updating. The screen has had bubbles with minimal use. Highly disappointed!'
      },
    ]
  },

]