const AWS = require("aws-sdk");
const fs = require("fs");

module.exports = {
  uploadFile: (fileName, res) => {
    const s3 = new AWS.S3({
      accessKeyId: process.env.AWS_ID,
      secretAccessKey: process.env.AWS_PASS,
    });
    // read content from the file
    const fileContent = fs.readFileSync(fileName);

    // setting up s3 upload parameters
    const params = {
      Bucket: process.env.BUCKET_NAME,
      Key: fileName,
      Body: fileContent,
    };

    // Uploading files to the bucket
    s3.upload(params, function (err, data) {
      if (err) {
        throw err;
      }
      if (data) {
        console.log(data);
        console.log(`File uploaded successfully. ${data.Location}`);
        return res.json("success").status(200);
      }
    });
  },

  emptyS3Directory: async function emptyS3Directory(bucket, dir) {
    const s3 = new AWS.S3({
      accessKeyId: process.env.AWS_ID,
      secretAccessKey: process.env.AWS_PASS,
    });
    const listParams = {
      Bucket: bucket,
      Prefix: dir,
    };

    const listedObjects = await s3.listObjectsV2(listParams).promise();

    if (listedObjects.Contents.length === 0) return;

    const deleteParams = {
      Bucket: bucket,
      Delete: { Objects: [] },
    };

    listedObjects.Contents.forEach(({ Key }) => {
      deleteParams.Delete.Objects.push({ Key });
    });

    await s3.deleteObjects(deleteParams).promise();

    if (listedObjects.IsTruncated) await emptyS3Directory(bucket, dir);

    console.log("Item Deleted");
  },
};
