import React from 'react';
import { Box, Typography, Button } from '@mui/material';

interface BannerProps {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  onEdit: () => void;
}

const BannerImageComp: React.FC<BannerProps> = ({ title, description, cta, image, background, onEdit }) => {
  return (
    <Box sx={{ background, padding: 2, margin: 2, borderRadius: 2, position: 'relative' }}>
      <img src={image} alt={title} style={{ width: '100%', borderRadius: '10px' }} />
      <Typography variant="h5">{title}</Typography>
      <Typography variant="body1">{description}</Typography>
      <Button variant="contained" color="primary">{cta}</Button>
      <Button onClick={onEdit} sx={{ position: 'absolute', top: 10, right: 10 }}>Edit</Button>
    </Box>
  );
};

export default BannerImageComp;
