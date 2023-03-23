import { Rating } from '@mui/material';
import React from 'react'
import profilePng from "../../images/Profile.png";

const ReviewCard = ({review}) => {
  const options = {
    value:review.rating,
    readOnly:true,
    precision:.5,
 
  }

  return (
    <div className="reviewCard">
    <img src={profilePng} alt="User" />
    <p>{review.name}</p>
    <Rating {...options}  />
    <span className="reviewCardComment">{review.comment}</span>
  </div>
  )
}

export default ReviewCard