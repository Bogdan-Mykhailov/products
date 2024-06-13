'use client'
import {FC} from 'react';
import {IconButton} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const Back: FC = () => {
  const handleClick = () => {
    window.history.back();
  };

  return (
    <IconButton
      color="primary"
      onClick={handleClick}
      style={{ margin: "15px 25px" }}>
      <ArrowBackIcon/>
    </IconButton>
  );
};
