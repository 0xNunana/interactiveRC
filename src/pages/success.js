import React from 'react'

const Success = () => {
  return (
    <div className='bg-gray-800 '>
        <div className='bg-gray-900 max-w-screen-xl mx-auto flex justify-center'>
            <div className='bg-gray-700  rounded-xl my-10 text-center p-4'>
            <div className="my-7 flex justify-center p-3">
                    <img src="illustration-thank-you.svg" alt="svg"/>
                </div>
                <div className='bg-gray-600 rounded-full w-3/5 flex justify-center mx-auto'>
                    <p className="pb-1 text-orange-500">You selected - out of 5</p>
                </div>
                <div className='text-3xl my-3 text-white pt-5'>
                    <h1>Thank You!</h1>
                </div>
                <div className="pb-8 px-5 text-gray-400">
                    We appreciate you taking the time to give a rating.<br/>If you ever need more support, don't hesitate to <br/> get in touch!
                </div>
            </div>
        </div>


    </div>
  )
}

export default Success;