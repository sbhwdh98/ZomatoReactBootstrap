import React from 'react'
import Card from 'react-bootstrap/Card';

const Cards = () => {
    return (
        <>
            {/* npm i react-bootstrap-card */}
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <div className="upper_data d-flex justify-content-between align-items-center ">
                        <h4 className="mt-2">Massala Theoryy</h4>
                        <span className="">3.8&nbsp;★</span>
                    </div>
                    <div className="lower_data d-flex justify-content-between">
                        <h5 className="">North indian, biryani, mughlai</h5>
                        <span className="">R350 for one</span>
                    </div>
                    <div className="extra"></div>
                    {/* 30:30 */}

                </Card.Body>
            </Card>
        </>
    )
}

export default Cards
