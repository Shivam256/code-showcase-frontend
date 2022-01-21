import React from "react";

import { Icon } from "@iconify/react";

import { useTheme } from "@mui/material";

import { FilterIcon } from "./filter.styles";

const Filter = ({ tech, isAddProject, handleAdd,selected }) => {
  const theme = useTheme();
  const { name, iconName } = tech;

  const handleAddFilter = () => {
    handleAdd(name);
  }
  return (
      <FilterIcon theme={theme} onClick={handleAddFilter} selected={selected}>
        {!isAddProject ? (
          <Icon icon={iconName} />
        ) : (
          <Icon icon={iconName} className="add-project"  />
        )}
      </FilterIcon>
  );
};

export default Filter;
