import multer, { FileFilterCallback } from "multer";
import { Request } from "express";

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB
    files: 5, // Maximum number of files
  },
  fileFilter: (
    req: Request,
    file: Express.Multer.File,
    cb: FileFilterCallback
  ) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error("Only images are allowed"));
    }
    cb(null, true);
  },
});

export default upload;
