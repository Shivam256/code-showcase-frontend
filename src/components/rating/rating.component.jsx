import React from "react";
import { styled, Avatar,Rating } from "@mui/material";

const RatingContainer = styled("div")(() => ({
  width: "100%",
  height: "fit-content",
  display: "flex",
  flexDirection: "row",

  '& .MuiAvatar-root':{
      margin:'0 10px 0 0px',
  },
  padding:'10px 5px',
  borderBottom:'1px solid #a3a3a3',
}));

const UserRating = ({ rating }) => {
  return (
    <RatingContainer>
      <Avatar src={rating.author.profilePic} />
      <div className="main-rating">
        <h4>{rating.author.username}</h4>
        <Rating value={rating.rating} readOnly/>
        <div className="comment">{rating.comment}</div>
      </div>
    </RatingContainer>
  );
};

export default UserRating;
