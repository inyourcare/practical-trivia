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
            <ConsultationForm post={post}/>
          </div>
        </div>
      </div>
    </>
  );
}
