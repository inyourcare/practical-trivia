import Image from "next/image";

export default function AwsTest() {
  return (
    <>
      <Image src={`/api/aws/s3/get?key=test/3.png`} width={500} height={500} alt={""} />
    </>
  );
}
