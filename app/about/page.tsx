import Header from "@/components/Header";
import getPostContent from "@/components/post/getPostContent";
import dayjs from "dayjs";
import Markdown from "markdown-to-jsx";
import Image from "next/image";
import PostHeader from "@/components/post/PostHeader";
import Nav from "@/components/Nav";
import styles from "./about.module.css";
import Link from "next/link";

export default function SangSangHome() {
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
              />
            </div>
            <div className="flex-1 p-3">
              {/* <h1 className="mb-2">{`The Short`}</h1> */}
              <h1 className={`${styles.titleText} mb-4`}>{`짧게`}</h1>
              <p
                className={`${styles.text} mb-2`}
              >{`실용주의 잡학사전은 사람과 관계, 근원적 의문, 교육에 관심이 있습니다.`}</p>
              <p
                className={`${styles.text}`}
              >{`자라나는 학생들이 스스로 만족하며 살아갈 수 있도록 도움을 주고 싶습니다. 교육이 이러한 해답을 제공할 수 있다고 믿습니다.`}</p>
            </div>
            <div className="flex-1 p-3">
              <h1 className={`${styles.titleText} mb-4`}>{`길게`}</h1>
              <p
                className={`${styles.subText} mb-2`}
              >{`실용주의 잡학사전은 대한민국의 대구라는 도시에서 태어났습니다. 그는 삶에 모순이 많다고 생각했습니다. 의문은 늘어났지만 해답을 찾을수는 없었습니다.`}</p>
              <p
                className={`${styles.subText} mb-2`}
              >{`허무함에 빠져 핑계로 가득찬 하루하루를 보내던 그는 어느날, 차분히 한걸음씩 걸어 가 보면 어떨까라는 생각을 합니다. 삶에대한 태도, 가치관, 버릇, 습관. 보이는 하나하나 차근차근 개선 해 나갑니다.`}</p>
              <p
                className={`${styles.subText} mb-2`}
              >{`그리고 그런 그에게 이제는 꿈이 생겼습니다. 그가 겪은 어려움을 그 다음 세대는 겪지 않았으면 좋겠다고 생각합니다. 살기 위해 일하는 것이 아니라 목표를 이루기 위해 살아갑니다. 내면의 출구를 향한 걸음을 끝내고, 세상을 향한 걸음을 나아가 보려합니다. 그 첫걸음.`}</p>
            </div>
          </div>

          <div className="my-12 prose prose-stone lg:prose-lg mx-auto">
            <Markdown>{post.content}</Markdown>
            소개 페이지 목록
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
          </div>
        </div>
      </div>
    </>
  );
}
