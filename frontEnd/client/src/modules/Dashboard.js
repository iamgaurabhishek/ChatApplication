import React from 'react'
import Avatar from '../assets/Avatar.png'

const Dashboard = () => {

    const contacts = [
        {
            name: 'Owen',
            status: 'active',
            img: Avatar
        },
        {
            name: 'Keshav',
            status: 'not active',
            img: Avatar
        },
        {
            name: 'Sahil',
            status: 'active',
            img: Avatar
        },
    ]
  return (
    <div className='w-screen flex'>
        {/* Left side Dashboard */}
        <div className='w-[25%] h-screen bg-white'>
            <div className='flex justify-center items-center my-8'>
                <div className='border border-primary p-[1%] rounded-full'>
                    <img src={Avatar} width={75} height={75} />
                </div>
                <div className='ml-8'>
                    <h3 className='text-2xl'>Abhishek Gaur</h3>
                    <p className='text-lg font-light'>My Account</p>
                </div>
            </div>
            <hr/>
            <div className='ml-15'>
                <div>Messages</div>
                <div>
                    {
                        contacts.map((contact, index) => (
                            <div key={index} className='flex items-center gap-2 p-2'>
                                <div className='border border-primary p-[1%] rounded-full'>
                                    <img src={contact.img} width={50} height={50} />
                                </div>
                                <div>
                                    <h3 className='text-lg font-medium'>{contact.name}</h3>
                                    <p className='text-gray-500'>{contact.status}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        {/* Middle content area */}
        <div className='w-[50%] h-screen'>

        </div>
        {/* Right side Dashboard */}
        <div className='w-[25%] h-screen'>

        </div>
    </div>
  )
}

export default Dashboard
