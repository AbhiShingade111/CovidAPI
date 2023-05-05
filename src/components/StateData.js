import React from 'react'
import './StateData.css'
export default function StateData(props) {
    // console.log(props.info)

    return (
        <div className='Main mb-4 mt-4'>
            {props.info?.map((val) => (
                <div className='mybox'>
                    <div className='p-5'>
                        <h5 className='font-semibold text-center text-xl font-mono'>{val.loc}</h5>
                        <div className='mt-4 mb-4'>
                            <h4 className='text-orange-600'>Confirmed case : {val.totalConfirmed}</h4>
                            <h4 className='text-green-600'>Discharged : {val.discharged}</h4>
                            <h4 className='text-red-700'>Deaths : {val.deaths}</h4>

                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}
