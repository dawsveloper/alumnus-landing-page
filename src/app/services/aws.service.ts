import { Injectable } from '@angular/core';
import { S3 } from 'aws-sdk';

@Injectable({
  providedIn: 'root'
})
export class AwsService {

  constructor() { }

  // uploadFile(file :any) {
  //   const fileType = file.type
  //   const s3Bucket = new S3({
  //     accessKeyId: 'ASIAQLGCRRDKBUSUO6ES',
  //     secretAccessKey: '048144MHoTFffEk7sifALnwdeKeALlR0U1MbLahM',
  //     region: 'us-west-2'
  //   })
  //   const param = {
  //     Bucket: 'cyclic-perfect-raincoat-newt-us-west-2',
  //     Key: file.name,
  //     Body: file,
  //     ContentType: fileType
  //   }
  //   s3Bucket.upload(param, function(err :any, data :any) {
  //     if (err) {
  //       console.log('There was an error uploading your file: ', err)
  //       return false
  //     }

  //     console.log('Success upload file. ', data)
  //     return true
  //   })
  // } 
}
