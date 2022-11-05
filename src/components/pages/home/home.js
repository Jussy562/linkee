import React from 'react'
import Profile from '../../profile/profile';
import  { linkData } from '../../link/linkFiles';
import Links from '../../link/links';
// import Profile from './components/profile/profile';

function Home() {
  return (
    <div className="md:px-20 md:py-8 md:pb-4 px-6 py-4">
        <Profile />
        {
            linkData.map((item) => (
            <Links key={item.id} item={item} />
            ))
        }
    

        <div className='socials flex gap-8 justify-center md:px-20 py-8'>
            <a href='https://slack.com'>
                <img src='/images/slack.png' alt='slack' className='w-7 h-7' />
            </a>

            <a href='https://github.com/jussy562'>
                <img  src='/images/github.png' alt='slack' className='w-7 h-7'  />
            </a>
        </div>
        
  </div>
  )
}

export default Home