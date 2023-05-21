import Link from "next/link";

export default function SangSangHome() {
  // const router = useRouter()
  // const { menu, submenu, detail } = router.query
  return (
    <div>
      <Link href={'/'}>
        <div
          className={`absolute top-0 left-0 bg-gray-300 text-white rounded px-4 py-1 bg-opacity-25 hover:bg-opacity-100`}
          style={{
            backgroundColor: 'green',
            backgroundImage: `url('/images/icons/list.svg')`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: `center`,
            width: `40px`,
            height: `40px`,
          }}
        ></div>
      </Link>
    </div>
  );
}
