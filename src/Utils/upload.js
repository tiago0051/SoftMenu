import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';
import crypto from 'crypto';

aws.config.update({
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    region: process.env.AWS_REGION
})

var s3 = new aws.S3()

var upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.AWS_BUCKET,
        acl: 'public-read',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        location: "Images/",
        metadata(req, file, cb){
            cb(null, {fieldName: file.fieldname})
        },
        key(req, file, cb){
            crypto.randomBytes(16, (err, buf) => {
                if(err) cb(err)

                const filename = buf.toString('hex') + "-" + file.originalname

                cb(null, filename)
            })
        }
    })
})

export default upload