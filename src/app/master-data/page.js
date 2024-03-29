"use client"
import React, { useEffect } from 'react'

import Header from '@/Components/header'
import { BsClipboardData } from 'react-icons/bs'
import { BsQrCodeScan } from 'react-icons/bs'
import { MdOutlineQrCodeScanner } from 'react-icons/md'
import { Col, Container, Row } from 'react-bootstrap'
import Aside from '@/Components/aside'
import CityTable from '@/Components/settings/city'
import { db } from '../../firebaseConfig'
import { collection, addDoc, setDoc, getDoc, doc, getDocs, onSnapshot } from "firebase/firestore";

// export const metadata = {
//     title: 'Techkilla',
//     description: 'Generated by Techkilla',
// }

var subscribe = undefined;


const City = ({ params }) => {

    // useEffect(() => {
    //     subscribe = onSnapshot(collection(db, "Users"),
    //         (snapshot) => {
    //             var docs = snapshot.docs;

    //             console.log(docs[0].data())
    //         });
    //     }
    // )

    return (
        <div className="main">
            <Aside />
            <main>
                <Header Heading={params?.building} isback={`/`} icon={<BsClipboardData />} />
                <Container>
                    <Row>
                        <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12} className='mt-4 pt-5'>
                            <div className="col-inner px-3">
                                <div className="col-main py-3 d-flex align-item-center">
                                    <div className="icon-box">
                                        <div className="icon" style={{ color: '#000' }}>
                                            <BsQrCodeScan />
                                        </div>
                                    </div>
                                    <div className="content-box-scan">
                                        <h5 className='text-center'>Total QR Send</h5>
                                        <p className='scane'>0</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12} className='mt-4 pt-5'>
                            <div className="col-inner px-3">
                                <div className="col-main py-3 d-flex align-item-center">
                                    <div className="icon-box">
                                        <div className="icon" style={{ color: '#000' }}>
                                            <MdOutlineQrCodeScanner />
                                        </div>
                                    </div>
                                    <div className="content-box-scan">
                                        <h5 className='text-center'>Total QR Scanned</h5>
                                        <p className='scane'>0</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <CityTable city={'all'} building={''} />
                </Container>
            </main>
        </div>

    )
}

export default City
