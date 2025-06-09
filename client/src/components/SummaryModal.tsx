import React from "react";
import { Modal, Box, Typography, Button, Fade } from "@mui/material";

type Props = {
  open: boolean;
  onClose: () => void;
  summary: string | null;
};

const SummaryModal: React.FC<Props> = ({ open, onClose, summary }) => (
  <Modal open={open} onClose={onClose}>
    <Fade in={open} timeout={500}>
      <Box sx={{ /* styling */ }}>
        <Typography variant="h6" mb={2}>Article Summary</Typography>
        <Typography variant="body2" mb={2}>
          {summary ?? "No summary available."}
        </Typography>
        <Button variant="contained" onClick={onClose}>Close</Button>
      </Box>
    </Fade>
  </Modal>
);

export default SummaryModal;
