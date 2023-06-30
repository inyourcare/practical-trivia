function scrollFollowing(item: Element, selectingClass: string) {
  const top = item.getBoundingClientRect().top;
  if (top) {
    const y = top + window.scrollY;
    window.scroll({
      top: y - 200,
      behavior: "smooth",
    });
  }
}
function afterSelected(finalCallback: any) {
  const selected = arr
    .filter((item) => item.classList.contains(selectingClass))
    .pop();
  selected?.classList.remove(selectingClass);
  selected?.classList.add(selectedClass);
  finalCallback();
}
function selecting(
  callback: any,
  intervalSeconds: number,
  timeoutSeconds: number
) {
  const intervalId = setInterval(() => {
    const realIdx = Math.abs(idx) % arr.length;
    const prevIdx = (arr.length + idx - 1) % arr.length;
    const afterIdx = (arr.length + idx + 1) % arr.length;
    arr[prevIdx].classList.remove(selectingClass);
    arr[afterIdx].classList.remove(selectingClass);
    arr[realIdx].classList.add(selectingClass);
    idx += 1;
    scrollFollowing(arr[realIdx], selectingClass);
  }, intervalSeconds);
  const timeoutId = setTimeout(() => {
    clearTimeout(intervalId);
    clearInterval(timeoutId);
    callback();
  }, timeoutSeconds);
}

// global variables
let idx: number = 0;
let arr: Element[] = [];
let selectingClass: string;
let selectedClass: string;

const select = (
  elems: Element[],
  selectingClassString: string,
  selectedClassString: string,
  finalCallback: any
) => {
  if (elems.length < 1) {
    finalCallback();
    return;
  }

  idx = Math.floor(Math.random() * (arr.length - 0 + 1) + 0);
  arr = elems;
  selectingClass = selectingClassString;
  selectedClass = selectedClassString;

  arr.forEach((elem) => {
    elem.classList.remove(selectingClass);
    elem.classList.remove(selectedClass);
  });

  selecting(
    () =>
      selecting(
        () => selecting(() => afterSelected(finalCallback), 200, 1000),
        100,
        2000
      ),
    50,
    3000
  );
};

export default select;
