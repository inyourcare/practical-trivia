import ContactInfo from "@/components/ContactInfo";
import AwsTest from "@/components/test/aws";
// import ReactQuillWrapper from "@/components/ReactQuillWrapper";
import { cookies } from "next/dist/client/components/headers";
import dynamic from "next/dynamic";

const ReactQuillWrapper = dynamic(
  () => import("@/components/ReactQuillWrapper"),
  {
    ssr: false,
    loading: () => <p>Loading ...</p>,
  }
);

export default function ContactinfoHome() {
  const cookieStore = cookies();
  const cookieCode = cookieStore.get("cookie-code");
  return (
    <>
      {cookieCode?.value === process.env.COOKIE_CODE ? <ContactInfo /> : <></>}
      <h2 className="mt-24">글추가</h2>
      <ReactQuillWrapper />
      {/* <AwsTest/> */}
    </>
  );
}
