import React, { useEffect, useState } from 'react'
import { MdOutlineModeEditOutline } from 'react-icons/md'
import { db } from '../../firebaseConfig';
import { collection, addDoc, setDoc, getDoc, doc, getDocs, onSnapshot } from "firebase/firestore";

var subscribe = undefined;

const CityTable = ({ city,building }) => {


    const [cityData,setCityData] = useState([]);

     useEffect(() => {
        subscribe = onSnapshot(collection(db, "Users"),
            (snapshot) => {
                var docs = snapshot.docs;

              setCityData(docs)
            });
        },[!subscribe]
    )
    
    return (
        <div className='setting py-4'>
            <div className="setting-list">
                <table>
                    <thead>
                        <tr className='row-1'>
                            <th>City</th>
                            <th>alias</th>
                            <th>SentTime</th>
                            <th>ScanTime</th>
                            <th>Has Project</th>
                            <th>Is Advisor</th>
                            <th>Is Hacker</th>
                            <th>Email</th>
                            <th>Building</th>
                            <th>ScanForSelf</th>
                            <th>OtherEmail</th>
                            {/* <th>Option</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cityData?.map((curItem, keys) => {
                                // console.log(building.toLowerCase() === curItem.data().obj.building,city == curItem.data().obj.City)
                                console.log(building.toLowerCase(),curItem.data().obj.building,city,curItem.data().obj.City)
                                if ((building.toLowerCase() === curItem.data().obj?.building) || city == "all") {
                                    return (
                                      
                                        <tr key={keys} className={`${keys % 2 !== 0 && 'row-1'}`}>
                                            <td>{curItem.data().obj?.City}</td>
                                            <td>{curItem.data().obj?.display_name}</td>
                                            <td>{curItem.data().obj?.hackathon_registration_date}</td>
                                            <td>{curItem.data().obj?.scanTime}</td>
                                            <td>{curItem.data().obj?.has_project}</td>
                                            <td>{curItem.data().obj?.is_advisor}</td>
                                            <td>{curItem.data().obj?.is_hacker}</td>
                                            <td>{curItem.data().obj?.mail}</td>
                                            <td>{curItem.data().obj?.building}</td>
                                            <td>{curItem.data().obj?.scanForSelf}</td>
                                            <td>{curItem.data().obj?.emailAddress}</td>
                                            {/* <td>
                                                <button className='btn edit'>
                                                    <MdOutlineModeEditOutline />
                                           np     </button>
                                            </td> */}
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
