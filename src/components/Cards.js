import React from 'react'
import Card from 'react-bootstrap/Card';

const Cards = () => {
    return (
        <>
            {/* npm i react-bootstrap-card */}
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    {/* 21:30 */}
                    <div className="upper-data">
                        <h4 className="">Massala Theoryy</h4>
                        <span className="">3.8&nbsp;★</span>
                    </div>

                    {/* <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </>
    )
}

export default Cards
