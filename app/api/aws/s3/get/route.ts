import { NextResponse } from "next/server";
import { GetObjectCommand, S3 } from "@aws-sdk/client-s3";
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const s3Client = new S3({
  region: process.env.AWS_REGION as string,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
});
// export { s3Client };

function encode(data: Uint8Array) {
  var str = data.reduce(function (a, b) {
    return a + String.fromCharCode(b);
  }, "");
  return btoa(str).replace(/.{76}(?=.)/g, "$&\n");
}

export async function POST(request: Request) {
// export async function GET() {
  const body = await request.json();
  console.log(body);

  // s3Client.getObject(
  //   {
  //     Bucket: process.env.S3_BUCKET_NAME as string,
  //     Key: "1.png",
  //   },
  //   function (errtxt, file) {
  //     if (errtxt) {
  //       console.log("lireFic", "ERR " + errtxt);
  //     } else {
  //       console.log("lecture OK");
  //       if (file)
  //         console.log("body", file.Body);
  //       // imageTest.src = "data:image/png;base64," + encode(file.Body);
  //     }
  //   }
  // );
  const input = {
    // GetObjectRequest
    Bucket: process.env.S3_BUCKET_NAME as string, // required
    Key: "1.png",
  };
  const command = new GetObjectCommand(input);
  const response = await s3Client.send(command);

  // console.log(await response.Body?.transformToString())
  // if (response.Body)
  //   console.log(
  //     "data:image/jpeg;base64," +
  //       encode(await response.Body.transformToByteArray())
  //   );

  const url = await getSignedUrl(s3Client, command, { expiresIn: 300 })
  // .then(data => {console.log(data)})

  return NextResponse.json({ url });
  // return url;
}
