import React,{useState,useEffect} from "react";
import { Avatar, Button, styled } from "@mui/material";
import {Link} from 'react-router-dom';
import useUsers from "../../hooks/useUsers";
import {useSelector} from 'react-redux';

const UserOverviewContainer = styled("div")(({theme}) => ({
  width: "100%",
  height: "fit-content",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  borderBottom: "1px solid #3A0CA3",
  padding: "8px 6px",
  justifyContent: "space-between",
  margin:'5px 0 8px 0',
  "& .MuiAvatar-root": {
    transform: "scale(0.9)",
    marginRight: 10,
  },
  '& .innerContainer':{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  '& .MuiButton-root':{
    display:'block',
    width:'fit-content',
    borderRadius:5,
    backgroundColor:'white',
    fontSize:'0.7em',
    letterSpacing:1,
    ...theme.palette.textGradients.txtGrad1,
    border:`1px solid ${theme.palette.colors.secondary}`
  },
  '& a':{
    textDecoration:'none',
    color:'#000'
  }
}));

const UserOverview = ({user}) => {
  const [iseFollowing, setIsFollowing] = useState(false);

  const { followUser } = useUsers();
  const {user:currentUser} = useSelector(state => state.auth);

  const handleIsFollowing = () => {
    console.log(currentUser.following, "this is user following");

    if (user !== null) {
      const res = currentUser.following.some((a) => a._id === user._id);
      console.log(res, "this is the result!");
      setIsFollowing(res);
      return res;
    }
  };

  useEffect(() => {
    handleIsFollowing();
  }, [user]);

  const handleFollow = () => {
    followUser(user._id);
    setIsFollowing(true);

  };

  return (
    <UserOverviewContainer>
      <div className="innerContainer">
        <Avatar src={user.profilePic} />
        <Link className="username" to={`/profile/${user._id}`}>{user.username}</Link>
      </div>
      <Button onClick={handleFollow}>{iseFollowing?'FOLLOWING':'FOLLOW'}</Button>
    </UserOverviewContainer>
  );
};

export default UserOverview;
