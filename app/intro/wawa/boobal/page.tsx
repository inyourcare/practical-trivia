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
        <Navermap width={500} height={500} lat={37.2533348} lon={127.4912777}/>
      </div>
      <br/>
      <br/>
      <br/>
      <div className="flex justify-center items-center">
        <p className="prose font-light text-gray-500 dark:text-gray-400">
          코로나 때문에 학생들은 학교에서의 기초학습과 사회화 과정에서 큰 영향을
          받았습니다, 초등학생들은 등교와 원격수업을 병행하며 힘들었을 텐데요.
          대전교육청을 예로 들면, 학습결손 상황을 해결하기 위해 초등학생을
          대상으로 한무릎공부방을 운영하고 있는 것으로 알려져 있습니다. 이는
          학생들의 학습결여를 파악하고 보충학습을 통해 개인 맞춤형 학습을
          제공하는 방식입니다. 이와같이, 와와학습코칭센터에서는 기초학력평가를
          통해 학생의 학력 상태를 파악하고 부족한 부분을 보충하는 프로그램을
          운영하고 있습니다. 더불어 학생들의 자기주도학습력을 키우기 위해 학습
          비법노트를 활용하고 있으며, 질의응답형 수업을 통해 학생들의 호기심을
          자극하고 사고력을 확장시키는 노력을 하고 있습니다. 초등학생들의 학습
          결여를 해결하기 위해서는 개별적인 접근과 맞춤형 지원이 필요합니다.
          학생들의 자기주도학습력을 키우기 위해 호기심을 자극하고 꾸준한 학습
          습관을 함께 형성하는 것이 중요합니다.
        </p>
      </div>
    </>
  );
}
