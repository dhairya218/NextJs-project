import React, { useState } from 'react';
import { Box, TextField, Button, Dialog } from '@mui/material';

interface EditBannerProps {
  banner: any;
  onSave: (updatedBanner: any) => void;
  onClose: () => void;
}

const EditBannerTemplateBs: React.FC<EditBannerProps> = ({ banner, onSave, onClose }) => {
  const [updatedBanner, setUpdatedBanner] = useState(banner);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBanner(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Dialog open={true} onClose={onClose} fullWidth>
      <Box p={3}>
        <TextField
          fullWidth
          label="Title"
          name="title"
          value={updatedBanner.title}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Description"
          name="description"
          value={updatedBanner.description}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="CTA"
          name="cta"
          value={updatedBanner.cta}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Image URL"
          name="image"
          value={updatedBanner.image}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Background"
          name="background"
          value={updatedBanner.background}
          onChange={handleChange}
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={() => onSave(updatedBanner)}>Save</Button>
      </Box>
    </Dialog>
  );
};

export default EditBannerTemplateBs;
