import React from "react";

//libs
import { Button, Grid, Modal,InputAdornment } from "@mui/material";
import {Icon} from '@iconify/react';

//componsnts
import CustomInput from "../custom-input/customInput.componsnt";

import { CreateProjectModalContainer,CustomButton } from "./createProjectModal.styles";

const CreateProjectModal = ({ state, toggleModal }) => {
  const showWidget = () => {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: `dx1ye2bro`,
        uploadPreset: `kp2gvmnk`,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log(result.info.url);
        }
      }
    );
    widget.open();
  };
  return (
    <Modal open={state} onClose={toggleModal}>
      <CreateProjectModalContainer>
        <h1 className="modal-header">POST YOUR PROJECT</h1>
        <Grid container sx={{ mt: 2 }}>
          <Grid item md={6}>
            <CustomInput label="Project Name" variant="standard" />
            <CustomInput
              label="Project Description"
              multiline
              rows={3}
              variant="standard"
            />
            <CustomButton onClick={showWidget}>UPLOAD IMAGES</CustomButton>
            <CustomButton onClick={() => {}}>CHOOSE STACK</CustomButton>
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
            />
         
          </Grid>
        </Grid>
        <Button>POST</Button>
      </CreateProjectModalContainer>
    </Modal>
  );
};

export default CreateProjectModal;
