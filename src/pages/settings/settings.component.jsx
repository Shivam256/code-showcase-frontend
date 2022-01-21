import React, { useState } from "react";
import { Button } from "@mui/material";
import CustomInput from "../../components/custom-input/customInput.componsnt";
import CustomButton from "../../components/custom-button/customButton.component";
import { SettingsPage, SettingCard } from "./settings.styles";
import useUsers from "../../hooks/useUsers";
import {useSelector} from 'react-redux';

const Settings = () => {
  const [data, setData] = useState({
    description: "",
    profilePic: "",
  });

  const {user} = useSelector(state => state.auth);

  const {updateUserInfo} = useUsers();

  const showWidget = () => {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: `dx1ye2bro`,
        uploadPreset: `kp2gvmnk`,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log(result.info.url);
          setData({...data,profilePic:result.info.url})
  
        }
    }
    );
    widget.open();
  };

  const handleSave = () => {
      console.log(data);
      updateUserInfo(user._id,data);
      
  }

  return (
    <SettingsPage>
      <SettingCard>
        <h2>UPDATE PROFILE:</h2>
        <CustomInput
          fullSize
          label="Profile Description"
          sx={{ mb: 4 }}
          rows={5}
          multiline
          onChange={(e) => {
            setData({ ...data, description: e.target.value });
          }}
        />
        <CustomButton onClick={showWidget}>UPLOAD PROFILE IMAGE</CustomButton>
        <br />
        <br />
        <br />

        <CustomButton className="save-btn" sx={{ float: "right" }} onClick={handleSave}>
          SAVE
        </CustomButton>
      </SettingCard>
    </SettingsPage>
  );
};

export default Settings;
