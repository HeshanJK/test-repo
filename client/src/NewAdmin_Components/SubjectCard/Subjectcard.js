import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";
import "./Subjectcard.css";

function Subjectcard({ foods }) {
    return (
        <div className="overflow-auto">
            <div className="subject-card">
                <Card style={{ width: '12rem', height: '12rem' }} >
                    <Card.Body>
                        <Card.Title >Beverage</Card.Title>
                        <ul>
                            {foods.map(food => {
                                if (food.category == 'beverage') {
                                    return (

                                        <li key={food._id}>{food.foodName}</li>
                                    )
                                }
                            })}
                        </ul>
                    </Card.Body>
                </Card>
                <Card style={{ width: '12rem', height: '12rem' }} >
                    <Card.Body>
                        <Card.Title >Fast Foods</Card.Title>
                        <ul>
                            {foods.map(food => {
                                if (food.category == 'fastFood') {
                                    return (

                                        <li key={food._id}>{food.foodName}</li>
                                    )
                                }
                            })}
                        </ul>
                    </Card.Body>
                </Card>
                <Card style={{ width: '12rem', height: '12rem' }} >
                    <Card.Body>
                        <Card.Title >Rice</Card.Title>
                        <ul>
                            {foods.map(food => {
                                if (food.category == 'rice') {
                                    return (

                                        <li key={food._id}>{food.foodName}</li>
                                    )
                                }
                            })}
                        </ul>
                    </Card.Body>
                </Card>
            </div>
        </div>


    )
}

export default Subjectcard;