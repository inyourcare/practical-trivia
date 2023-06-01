import ContactInfo from "@/components/ContactInfo";
import { cookies } from "next/dist/client/components/headers";

export default function ContactinfoHome() {
  const cookieStore = cookies();
  const cookieCode = cookieStore.get('cookie-code');
  return (
    <>
      {cookieCode?.value===process.env.COOKIE_CODE?<ContactInfo />:(<></>)}
    </>
  );
}
