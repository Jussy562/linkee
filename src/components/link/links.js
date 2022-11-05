import React from 'react';
import { Link } from 'react-router-dom';

function Links({item}) {
  return (
    <div className='flex w-full items-center justify-center  '>
        <Link to={item.pageName} className='rounded bg-gray-200 text-gray-600 font-medium font-inter mb-4 w-full p-6 flex flex-gap-y-2 justify-center items-center hover:bg-gray-100 ' id={item.id} href={item.url}>{item.name}</Link>
    </div>
  )
}

export default Links