"use client"
import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function SangSangHome() {
  // const router = useRouter()
  // const { menu, submenu, detail } = router.query
  const form = useRef<HTMLFormElement>(null);

  const onSubmitForm = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      emailjs.sendForm(
        process.env.NEXT_PUBLIC_NEXT_PUBLIC_MAIL_SERVER_KEY as string,
        process.env.NEXT_PUBLIC_MAIL_TEMPLATE_KEY as string,
        form.current?form.current:"",
        process.env.NEXT_PUBLIC_MAIL_PRIVATE_KEY as string
      );
      // toast.success('소중한 의견 감사드립니다.', {
      //   position: toast.POSITION.TOP_CENTER,
      //   icon: '💌',
      //   hideProgressBar: true,
      //   className: 'toast-message'
      // })
    } catch (error) {
      // toast.error('메일 전송에 실패하였습니다. ', {
      //   position: toast.POSITION.TOP_CENTER,
      //   icon: '🥲',
      //   hideProgressBar: true,
      //   className: 'toast-message'
      // })
      console.log(error);
    }
  };
  return (
    <div className={""}>
      <form ref={form} className={""} onSubmit={(e)=>onSubmitForm(e)}>
        <label>Name *</label>
        <input className={""} type="text" name="name" required />

        <label>Email *</label>
        <input className={""} type="email" name="email" required />

        <label>Message *</label>
        <textarea className={""} name="message" />

        <input className={""} type="submit" value="submit" required />
      </form>
    </div>
  );
}
