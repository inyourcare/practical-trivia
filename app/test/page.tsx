"use client";

export default function TestHome() {
  // const router = useRouter()
  // const { menu, submenu, detail } = router.query
  return (
    <div className="">
      <h1>The overflow-x Property</h1>

      <p>
        The overflow-x property specifies whether to clip the content, add a
        scroll bar, or display overflow content of a block-level element, when
        it overflows at the left and right edges.
      </p>

      <h2>overflow-x: scroll:</h2>
      <div className="w-[40px] overflow-x-scroll">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
      </div>

      <h2>overflow-x: hidden:</h2>
      <div className="ex2">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit..
      </div>

      <h2>overflow-x: auto:</h2>
      <div className="ex3">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
      </div>

      <h2>overflow-x: visible (default):</h2>
      <div className="ex4">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
      </div>
    </div>
  );
}
