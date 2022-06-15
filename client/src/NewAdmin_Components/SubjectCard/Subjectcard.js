import React , {useEffect,useState} from "react";
import { Card } from "react-bootstrap";
import {Button} from "react-bootstrap";
import axios from "axios";
import "./Subjectcard.css";

function Subjectcard ({foods}){
     return(
        <div className="overflow-auto">
        <div className="subject-card">
            {foods.map(food=>{
                return(
                    
                    <Card style={{ width: '12rem' , height:'12rem'}} >
                    <Card.Body>
                    <Card.Title key={food.key}>{food.category}</Card.Title>
                    {/* <Card.Text className="text" key={food.key}>
                    {food.items}
                    </Card.Text> */}
                    <ul>{food.items.map(fooditem=>{
                        return(
                            <li key={fooditem.itemkey}>{fooditem.listitem}</li>
                        )
                       
                    })}                 
                    </ul>
                    
                    
                    </Card.Body>
                    
                    </Card>
                    
                )
            })}
        </div>
        </div>
       
        
    )
}

export default Subjectcard;