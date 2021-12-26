import { Grid } from "@mui/material";
import React,{useState,useEffect} from "react";
import { ProjectPreviewContainer } from "./projectPreview.styles";

const ProjectPreview = ({imageUrl}) => {
    const [spanNumber, setspanNumber] = useState(0);

    useEffect(()=>{
        const nums = [26,33,45,40,37];
        const idx = Math.floor(Math.random()*nums.length);
        setspanNumber(nums[idx])
    },[])

  return <ProjectPreviewContainer spanNum={spanNumber} url={imageUrl}/>
};

export default ProjectPreview;
