import React from 'react'

function Links({item}) {
  return (
    <div className='flex w-full items-center justify-center  '>
        <a className='rounded bg-gray-200 mb-4 w-full p-6 flex flex-gap-y-2 justify-center items-center hover:bg-gray-100 ' id={item.id} href={item.url}>{item.name}</a>
    </div>
  )
}

export default Links