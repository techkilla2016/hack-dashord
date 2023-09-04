import { Row, Col } from 'react-bootstrap'
import React from 'react'
import { main } from '../../../data/main'
import { BsCalendarMonth } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'
import Image from 'next/image'
import Link from 'next/link'
const Dashbord = () => {
    return (
        <Row className='py-5'>
            {
                main?.map((curItem, keys) => {
                    return (
                        <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12} key={keys} className='mb-5 pb-4'>
                            <div className="col-inner px-3">
                                <div className="col-main py-3 d-flex align-item-center justify-content-between">
                                    <div className="icon-box">
                                        <div className="icon" style={{ background: curItem?.bg }}>
                                            <Image alt='Techkilla' src={curItem?.icon} width={100} height={100} />
                                        </div>
                                    </div>
                                    <div className="content-box">
                                        <span><IoLocationOutline /></span>
                                        <Link href={`/dashbord/${curItem?.heading}`}>{curItem?.heading}</Link>
                                    </div>
                                </div>
                                <div className="col-footer py-3">
                                    <div className="icon">
                                        <span><BsCalendarMonth /></span>
                                        <span className='px-2'>{curItem?.date}</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    )
                })
            }
        </Row >
    )
}

export default Dashbord
