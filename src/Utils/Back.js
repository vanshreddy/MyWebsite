import React from 'react';
import { Html } from "@react-three/drei";
import { Button } from 'react-bootstrap';


export default function Backbutton(props){
    function handleclick(){
        props.redirect();
    }
    return(
              <Button variant="outline-light" onClick={handleclick}>Home</Button>
    )
    }