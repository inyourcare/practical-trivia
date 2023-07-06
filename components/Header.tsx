import Nav from "./Nav";
import { tagDict } from "./util/tag/tagToKr";

function Header(props: HeaderComponent) {
  return (
    <header className="w-full flex flex-col py-5 bg-[rgba(35,46,82,1)] text-white">
      <Nav />

      <div className="container flex flex-col mx-auto my-32 p-10">
        {props.tag === "hidden" ? (
          ""
        ) : (
          <p className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base font-semibold text-white uppercase inline mt-8">
            {tagDict[props.tag as string]}
          </p>
        )}

        {props.title === "hidden" ? (
          ""
        ) : (
          <div>
            <p className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base font-semibold text-white uppercase inline mt-8">
              {props.tag}
            </p>
            <br/>
            <p className="font-bold text-left text-white inline mt-4 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] xl:text-[52px] 2xl:text-[52px]">
              {props.title}
            </p>
          </div>
        )}
      </div>
    </header>
  );
}

Header.defaultProps = {
  tag: "👋 반갑습니다!",
  title: "나에게 꼭 맞는 학습 방법으로 공부 해 봐요.",
};

interface HeaderComponent {
  tag?: string;
  title?: string;
}

export default Header;
