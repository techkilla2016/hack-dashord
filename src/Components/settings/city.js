import React from 'react'
import { MdOutlineModeEditOutline } from 'react-icons/md'
import cityData from '@/data/city'
const CityTable = ({ city }) => {
    return (
        <div className='setting py-4'>
            <div className="setting-list">
                <table>
                    <thead>
                        <tr className='row-1'>
                            <th>City</th>
                            <th>alias</th>
                            <th>Registration</th>
                            <th>Has Project</th>
                            <th>Is Advisor</th>
                            <th>Is Hacker</th>
                            <th>Email</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cityData?.map((curItem, keys) => {

                                if (city === curItem?.City) {
                                    return (
                                        <tr key={keys} className={`${keys % 2 !== 0 && 'row-1'}`}>
                                            <td>{curItem?.City}</td>
                                            <td>{curItem?.display_name}</td>
                                            <td>{curItem?.hackathon_registration_date}</td>
                                            <td>{curItem?.has_project}</td>
                                            <td>{curItem?.is_advisor}</td>
                                            <td>{curItem?.is_hacker}</td>
                                            <td>{curItem?.mail}</td>
                                            <td>
                                                <button className='btn edit'>
                                                    <MdOutlineModeEditOutline />
                                                </button>
                                            </td>
                                        </tr>)
                                }


                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CityTable
