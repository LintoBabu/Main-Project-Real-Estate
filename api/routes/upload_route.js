import express from 'express';
import { upload } from '../utils/cloudinary.js';

const router = express.Router();

router.post('/image', upload.single('image'), (req, res) => {
  try {
    res.status(200).json({
      success: true,
      url: req.file.path,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
