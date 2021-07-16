import path from "path";
import express from "express";
import multer from "multer";

const uploadRouter = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const fileFilter = (req, file, cb) => {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);
  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(new Error("Images only!!"));
  }
};

const upload = multer({
  storage,
  fileFilter,
});

uploadRouter.post("/", upload.single("image"), (req, res) => {
  res.send(`/${req.file.path}`);
});

export default uploadRouter;
