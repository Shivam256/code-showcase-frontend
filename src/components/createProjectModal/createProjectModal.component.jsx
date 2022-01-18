import React, { useState,useEffect } from "react";

//libs
import { Button, Grid, Modal, InputAdornment } from "@mui/material";
import { Icon } from "@iconify/react";

//componsnts
import CustomInput from "../custom-input/customInput.componsnt";
import { default as CreateButton } from "../custom-button/customButton.component";
import StackModal from "./stackModal.component";

import {
  CreateProjectModalContainer,
  CustomButton,
} from "./createProjectModal.styles";

const CreateProjectModal = ({ state, toggleModal }) => {
  const [showStackModal, setShowStackModal] = useState(false);
  const [projectData, setProjectData] = useState({
    name: "",
    description: "",
    links: {
      github: null,
      gitlab: null,
      web: null,
      codesandbox: null,
      codepen: null,
    },
    images: [],
    stack: [],
  });



  const handleProjectInput = (e) => {
    setProjectData({ ...projectData, [e.target.name]: e.target.value });
  };

  const handleLinkInput = (e) => {
    setProjectData({...projectData,links:{...projectData.links,[e.target.name]:e.target.value}})
  }

  const toggleStackModal = () => {
    setShowStackModal(!showStackModal);
  };

  const handleAddToStack = (name) => {
    if(projectData.stack.some(a => a === name)){
      const newStack = projectData.stack.filter(a => a !== name);
      setProjectData({...projectData,stack:newStack});
    }else{
      setProjectData({...projectData,stack:[...projectData.stack,name]});
    }
  }

  const showWidget = () => {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: `dx1ye2bro`,
        uploadPreset: `kp2gvmnk`,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log(result.info.url);
          setProjectData({...projectData,images:[...projectData.images,result.info.url]})
        }
      }
    );
    widget.open();
  };

  const handlePostProject = (e) =>{
    e.preventDefault();
    if(projectData.images.length === 0){
      return;
    }
    if(projectData.stack.length === 0){
      return;
    }
    console.log(projectData);
  }

  return (
    <Modal open={state} onClose={toggleModal}>
      <form onSubmit={handlePostProject}>
        <CreateProjectModalContainer>
          <h1 className="modal-header">POST YOUR PROJECT</h1>
          <Grid container sx={{ mt: 2 }}>
            <Grid item md={6}>
              <CustomInput
                label="Project Name"
                variant="standard"
                name="name"
                onChange={handleProjectInput}
                required
              />
              <CustomInput
                label="Project Description"
                multiline
                rows={3}
                variant="standard"
                name="description"
                onChange={handleProjectInput}
                required
              />
              <CustomButton onClick={showWidget}>UPLOAD IMAGES</CustomButton>

              <CustomButton onClick={toggleStackModal}>
                CHOOSE STACK
              </CustomButton>
              <StackModal
                state={showStackModal}
                toggleModal={toggleStackModal}
                addToStack = {handleAddToStack}
                stack = {projectData.stack}
              />
            </Grid>
            <Grid item md={6}>
              <CustomInput
                label="Github"
                variant="standard"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Icon icon="akar-icons:github-fill" />
                    </InputAdornment>
                  ),
                }}
                name="github"
                onChange={handleLinkInput}
              />
              <CustomInput
                label="Gitlab"
                variant="standard"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Icon icon="jam:gitlab" />
                    </InputAdornment>
                  ),
                }}
                name = "gitlab"
                onChange={handleLinkInput}
              />
              <CustomInput
                label="Web"
                variant="standard"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Icon icon="mdi:web" />
                    </InputAdornment>
                  ),
                }}
                name="web"
                onChange={handleLinkInput}
              />
              <CustomInput
                label="Code sandbox"
                variant="standard"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Icon icon="ant-design:code-sandbox-outlined" />
                    </InputAdornment>
                  ),
                }}
                name = "codesandbox"
                onChange={handleLinkInput}
              />
              <CustomInput
                label="Codepen"
                variant="standard"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Icon icon="akar-icons:codepen-fill" />
                    </InputAdornment>
                  ),
                }}
                name="codepen"
                onChange={handleLinkInput}
              />
            </Grid>
          </Grid>
          <CreateButton type="submit">POST</CreateButton>
        </CreateProjectModalContainer>
      </form>
    </Modal>
  );
};

export default CreateProjectModal;
