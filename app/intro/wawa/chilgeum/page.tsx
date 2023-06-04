import Image from "next/image";
import Navermap from "@/components/Navermap";
export default function WawaHome() {
  return (
    <>
      <div className="flex justify-center items-center">
        <Image
          width={1920}
          height={520}
          src={`/images/intro/wawa/etc.jpg`}
          alt=""
        />
      </div>

      <div className="flex justify-center items-center">
        <Image
          width={1920}
          height={520}
          src={`/images/intro/wawa/etc2.jpg`}
          alt=""
        />
      </div>

      <div className="flex justify-center items-center">
        <Image
          width={1076}
          height={362}
          src={`/images/intro/wawa/1.png`}
          alt=""
        />
      </div>

      <div className="flex justify-center items-center p-20 bg-gray-300">
        <Image
          width={1080}
          height={199}
          src={`/images/intro/wawa/2.png`}
          alt=""
        />
      </div>

      <div className="flex justify-center items-center p-20">
        <Image
          width={1070}
          height={415}
          src={`/images/intro/wawa/3.png`}
          alt=""
        />
      </div>

      <div className="flex justify-center items-center">
        <Image
          width={1600}
          height={681}
          src={`/images/intro/wawa/4.png`}
          alt=""
        />
      </div>

      <div className="flex justify-center items-center bg-gray-300">
        <Image
          width={1235}
          height={915}
          src={`/images/intro/wawa/5.png`}
          alt=""
        />
      </div>

      <div className="flex justify-center items-center">
        <Image
          width={1079}
          height={572}
          src={`/images/intro/wawa/6.png`}
          alt=""
        />
      </div>
      <br/>
      <br/>
      <div className="flex justify-center items-center">
        <Navermap width={500} height={500} lat={36.9826472} lon={127.9176839}/>
      </div>
    </>
  );
}
