import getPostContent from "@/components/post/getPostContent";
import Markdown from "markdown-to-jsx";
import Image from "next/image";
import Nav from "@/components/Nav";
import styles from "./about.module.css";
import Link from "next/link";
import WawaLinkList from "@/components/util/wawa/WawaLinkList";

export default function AboutHome() {
  const post = getPostContent("about");

  return (
    <>
      <header className="w-full flex flex-col py-5 bg-[rgba(35,46,82,1)]">
        <Nav />
      </header>
      <div
        className="py-12 flex justify-center"
        style={{
          backgroundImage: `url('` + post.data.image + `')`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `center`,
          backgroundSize: "100% 100%",
          // maxWidth: "1280px",
          // width: "100%",
          // height: "0px",
          // paddingTop: `${Math.round(Number(order.at(1))) * 100}%`,
          // paddingTop: `100%`,
        }}
      >
        <div className="w-full max-w-screen-lg">
          <div className="w-full flex p-3 flex-col md:flex-row">
            <div className="flex-1 p-3 flex justify-center items-start">
              <Image
                width={300}
                height={300}
                src={"/images/camera.jpg"}
                alt="Image Description"
                style={{ width: 300, height: 300 }}
              />
            </div>
            <div className="flex-1 p-3">
              {/* <h1 className="mb-2">{`The Short`}</h1> */}
              <h1 className={`${styles.titleText} mb-4`}>{`짧게`}</h1>
              <p
                className={`${styles.text} mb-2`}
              >{`안녕하세요. 저는 지금은 입시 컨설턴트 공부를 하고 있고 미래에는 저만의 교육 플랫폼을 세우고자 하는 사람입니다.`}</p>
              <p
                className={`${styles.text} mb-2`}
              >{`저는 컴퓨터를 전공했고 개발을 5년 정도 했습니다. 어느정도는 안정적으로 살만한 환경을 만들었지만, 이 길이 내 길이 아니라는 생각에 새로운 길을 찾아 나섰습니다.`}</p>
            </div>
            <div className="flex-1 p-3">
              <h1 className={`${styles.titleText} mb-4`}>{`길게`}</h1>
              <p
                className={`${styles.subText} mb-2`}
              >{`이 홈페이지는 동화세상 에듀코 교육 전문 코치님들과 함께합니다. 홈페이지의 성과가 생기기 시작하면 다른 교육 채널들을 폭넓게 포용할 생각입니다.`}</p>
              <p
                className={`${styles.subText} mb-2`}
              >{`개발쟁이가 갑자기 교육일을 왜 하는가 생각하실수도 있습니다. 저는 사실 공부하는걸 좋아합니다. (학생때는 싫었지만...) 개발일을 하기 전에 학원에서도 2년 정도 강사로 일을 했었고 그때도 이 일(교육관련)이 천직이라고 생각했지만, 전공을 살리고 싶어 개발일을 시작했었습니다.`}</p>
              <p
                className={`${styles.subText} mb-2`}
              >{`서울에서 개발일을 하던중에 몸이 급격하게 안좋아졌고, 정신적으로도 피폐해져 있음을 깨달았습니다. 고향에 내려와 요양을 하는 중에 에듀코에서 일을 시작하고 흥미를 느끼기 시작했습니다.`}</p>
              <p
                className={`${styles.subText} mb-2`}
              >{`지금은 홈페이지를 키우는것과 교육 전문가가 되는것 그리고 마케터로서 영업을 잘하는 것, 세 가지 목표가 있습니다.`}</p>
              <p
                className={`${styles.subText} mb-2`}
              >{`나를 오픈하는것이 맞는 일인지 오랫동안 고민했는데요. 제가 누구이고 왜 이런일을 하는지 모르는 채로 가장 소중한 내 아이의 일을 맡길 사람은 없을 것 같다는 생각에 About 의 내용을 변경합니다. 꼭 교육 문의가 아니라도 좋으니 문의하실 내용은 편하게 practicaltrivia@gmail.com 으로 보내 주세요. 감사합니다.`}</p>
            </div>
          </div>

          <div className="my-12 prose prose-stone lg:prose-lg mx-auto">
            <Markdown>{post.content}</Markdown>

            <h4>소개 페이지 목록</h4>
            <ul>
              <li>
                <Link href={`${process.env.HOST_BASE_URL}/intro/howcoding`}>
                  하우코딩
                </Link>
              </li>
              <li>
                <Link href={`${process.env.HOST_BASE_URL}/intro/goodo`}>
                  공부구도
                </Link>
              </li>
              <li>
                <Link href={`${process.env.HOST_BASE_URL}/intro/sangsang`}>
                  상상코칭
                </Link>
              </li>
            </ul>

            <h4>와와 소개 페이지</h4>
            <WawaLinkList />
          </div>
        </div>
      </div>
    </>
  );
}
