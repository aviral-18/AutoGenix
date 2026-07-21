import multer from "multer";

const upload = multer({storage: multer.diskStorage({})})

export default upload

//ye jo bhi image aayegi usko req mai daal dega