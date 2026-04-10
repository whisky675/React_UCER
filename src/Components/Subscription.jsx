import React from 'react'

function Subscription(){
    const isSubscribed = false
    
    return(
        <div className='min-screen bg-gray-100 p-6 flex items-center justify-center'>
            <div className='bg-white p-6 rounded-lg shadow-md text-center'>
                <h2 classname='text-center font-bold mb-4 text-blue-600'> Subscription Status</h2>
                {
                    isSubscribed
                    ? (<button classname = 'px-4 py-2 bg-green-500 text-white rounded'>Subscribed Thank You!</button>
                    )
                    :( <button classname = 'px-4 py-2 bg-red-500 text-white rounded'>Subscribed Thank You!</button>
                    )
                }
            </div>
        </div>
    )
}
export default Subscription