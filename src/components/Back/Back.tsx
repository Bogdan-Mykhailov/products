'use client'
import {FC} from 'react';
import {Button} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const Back: FC = () => {
  const handleClick = () => {
    window.history.back();
  };

  return (
    <Button style={{ marginTop: 25}} onClick={handleClick}>
      <ArrowBackIcon/>
    </Button>
  );
};
