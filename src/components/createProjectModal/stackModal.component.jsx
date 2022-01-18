import React from "react";

import { Grid, Modal, styled, Tooltip } from "@mui/material";
import techmap from "../../helpers/tech.map";
import { Icon } from "@iconify/react";

const StackContainer = styled("div")(() => ({
  width: "50vw",
  height: "50vh",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#fff",
  outline: "none",
  borderRadius: 10,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "10px 15px",
  "& .modal-title": {
    marginBottom: 15,
  },
}));

const StackGrid = styled(Grid)(() => ({
  width: "100%",
  flex: 1,
  overflowY: "scroll",
}));

const StackItem = styled(Grid)(({ theme,selected }) => ({
  height: "30%",
  margin: "10px",
  borderRadius: 10,
  display: "grid",
  placeItems: "center",
  border: `2px solid ${theme.palette.colors.secondary}`,
  cursor: "pointer",
  backgroundColor: selected?theme.palette.colors.secondaryFaint:'',
  "&:hover": {
    backgroundColor: theme.palette.colors.secondaryFaint,
  },
  "& svg": {
    transform: "scale(3)",
  },
}));

const StackModal = ({ state, toggleModal,addToStack,stack }) => {


  return (
    <Modal open={state} onClose={toggleModal}>
      <StackContainer>
        <h2 className="modal-title">CHOOSE THE STACK OF YOUR PROJECT!</h2>
        <StackGrid container direction="row" justifyContent="space-between">
          {techmap.map((item, index) => ( 
            <StackItem item md={2} key={index} onClick={addToStack.bind(this,item.name)} selected={stack.some(a => a === item.name)}>
              <Tooltip title={item.name}>
                <Icon icon={item.iconName} />
              </Tooltip>
            </StackItem>
          ))}
          {techmap.map((item, index) => (
            <StackItem item md={2} key={index}>
              <Tooltip title={item.name}>
                <Icon icon={item.iconName} />
              </Tooltip>
            </StackItem>
          ))}
        </StackGrid>
      </StackContainer>
    </Modal>
  );
};

export default StackModal;
