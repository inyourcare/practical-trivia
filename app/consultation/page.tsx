import Nav from "@/components/Nav";

export default function ConsultationHome() {
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
          // maxWidth: "1280px",
          // width: "100%",
          // height: "0px",
          // paddingTop: `${Math.round(Number(order.at(1))) * 100}%`,
          // paddingTop: `100%`,
        }}
      >
        <div className="w-full max-w-screen-lg">
          <div className="my-12 prose prose-stone lg:prose-lg mx-auto">
            hello consultation test
          </div>
        </div>
      </div>
    </>
  );
}
