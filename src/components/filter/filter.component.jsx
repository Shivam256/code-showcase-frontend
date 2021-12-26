import React from "react";

import { Icon } from "@iconify/react";

import { useTheme } from "@mui/material";

import { FilterIcon } from "./filter.styles";

const Filter = ({ tech, isAddProject, onClick }) => {
  const theme = useTheme();
  const { name, iconName } = tech;
  return (
      <FilterIcon theme={theme}>
        {!isAddProject ? (
          <Icon icon={iconName} />
        ) : (
          <Icon icon={iconName} className="add-project" onClick={onClick} />
        )}
      </FilterIcon>
  );
};

export default Filter;
