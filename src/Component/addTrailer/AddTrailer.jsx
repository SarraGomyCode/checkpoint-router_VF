import React from 'react'
import ReactPlayer from 'react-player/youtube'
import  '../addTrailer/AddTrailer.css'
import { Button } from "react-bootstrap";


const AddTrailer = (props) => {
    const movie=props.location.state.movie
    

   
return (
        <div className='body'>
           
            <div className='video'>
            <ReactPlayer className='videobox' controls url={movie.trailer} />
            <div>
            <h5 className='description' > Synopsis : <br/> {movie.description}</h5>
            <Button className='backbtn' variant="dark" onClick={()=>{props.history.push("/")}}>Back to home page</Button>
            </div>
            </div>
            
        </div>
    )
}

export default AddTrailer
