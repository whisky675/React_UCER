import React from 'react'

function ReportCard(){
    const students = [
        {id:1, name:'Vishesh', marks:98},
        {id:2, name:'Hitesh', marks:92},
        {id:3, name:'Nilesh', marks:80},
        {id:4, name:'Suresh', marks:33},
        {id:5, name:'Mukesh', marks:70}
    ]
    return(
        <div className='min-h-screen bg-gray-100 p-6'>
            <div className='max-wd-md mx-auto bg-white rounded-lg shadow-md'>
                <h2 className='text-2x1 font-bold mb-4 text-blue-600 text-center'>Students' Results</h2>
                <ul>
                    {
                        students.map((student)=>(
                            <li>

                            </li>
                        ))
                    }

                </ul>
            </div>
        </div>
    )
}