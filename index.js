"use strict";
const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");
const awsx = require("@pulumi/awsx");

var buckets = ["bucket-one" , "bucket-two" , "bucket-three"]
var export_names = []

buckets.forEach(function(name){
    const bucket = new aws.s3.Bucket(name);
    export_names.push(bucket.id);
})

// Export the name of the bucket
exports.bucketName = export_names;
