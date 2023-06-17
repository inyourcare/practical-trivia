import Nav from "@/components/Nav";
import ConsultationForm from "@/components/consultation/ConsultationForm";
import getPostContent from "@/components/post/getPostContent";

export default function ConsultationHome({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const post = getPostContent(slug);
  return (
    <>
      <header className="w-full flex flex-col py-5 bg-[rgba(35,46,82,1)]">
        <Nav />
      </header>
      <div
        className="py-12 flex justify-center"
        style={{
          backgroundImage: `url('/images/about3.jpg')`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `center`,
          backgroundSize: "100% 100%",
        }}
      >
        <div className="w-full max-w-screen-lg">
          <div className="my-12 prose prose-stone lg:prose-lg mx-auto">
            {/* {`${post.data.tags} ${(post.data.tags as Array<string>).includes("Sangsang")}`} */}
            <h2>문의하기</h2>
            <div className="text-sm">
              아래 문의하기 버튼을 누르면 전문 상담사가 연락을 드립니다.
              <br/>
              개인정보가 부담스러운 분들은 practicaltrivia@gmail.com 로 메일 주셔도 좋습니다! :D
            </div>
            <div className="not-prose">
              <hr className="mt-[2em] mb-[2em]"/>
            </div>
            <ConsultationForm tags={post.data.tags}/>
          </div>
        </div>
      </div>
    </>
  );
}
