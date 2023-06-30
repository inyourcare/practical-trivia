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
  intervalSeconds: number,
  timeoutSeconds: number
) {
  const intervalId = setInterval(() => {
    
    if (idx === 0) idx = arr.length;

    const realIdx = Math.abs(idx) % arr.length;
    const prevIdx = (arr.length + idx - (direction * gap)) % arr.length;
    const afterIdx = (arr.length + idx + (direction * gap)) % arr.length;
    arr[prevIdx].classList.remove(selectingClass);
    arr[afterIdx].classList.remove(selectingClass);
    arr[realIdx].classList.add(selectingClass);
    
    console.log(idx,realIdx)
    idx = idx + (direction * gap);

    scrollFollowing(arr[realIdx], selectingClass);
  }, intervalSeconds);
  const timeoutId = setTimeout(() => {
    clearTimeout(intervalId);
    clearInterval(timeoutId);
    curRecursion += 1;
    if (maxRecursion <= curRecursion){
      afterSelected(lastCallback)
    } else {
      selecting(intervalSeconds*2,timeoutSeconds/2)
    }
  }, timeoutSeconds);
}

// global variables
let idx: number = 0;
let arr: Element[] = [];
let selectingClass: string;
let selectedClass: string;
let direction = 1;
let gap = 1;
let maxRecursion = 2;
let curRecursion = 0;
let lastCallback:any;

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
  curRecursion = 0;
  lastCallback = finalCallback;

  arr.forEach((elem) => {
    elem.classList.remove(selectingClass);
    elem.classList.remove(selectedClass);
  });

  selecting(50,3000)
};

export default select;
