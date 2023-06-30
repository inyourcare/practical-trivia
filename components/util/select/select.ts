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
function selecting() {
  const intervalId = setInterval(() => {
    if (idx === 0) idx = arr.length;

    const realIdx = Math.abs(idx) % arr.length;
    const prevIdx = (arr.length + idx - direction * gap) % arr.length;
    const afterIdx = (arr.length + idx + direction * gap) % arr.length;
    arr[prevIdx].classList.remove(selectingClass);
    arr[afterIdx].classList.remove(selectingClass);
    arr[realIdx].classList.add(selectingClass);

    // console.log(idx, realIdx);
    idx = idx + direction * gap;

    scrollFollowing(arr[realIdx], selectingClass);
  }, intervalSeconds);
  const timeoutId = setTimeout(() => {
    clearTimeout(intervalId);
    clearInterval(timeoutId);
    curRecursion += 1;
    if (maxRecursion <= curRecursion) {
      if (Math.random() > 0.5 && oneMoreCnt < 1) {
        console.log("baby one more time");
        curRecursion = 0;
        intervalSeconds = initialIntervalSeconds;
        timeoutSeconds = initialTimeoutSeconds;
        oneMoreCnt += 1;
        selecting();
      } else afterSelected(lastCallback);
    } else {
      intervalSeconds = 2 * intervalSeconds;
      timeoutSeconds = timeoutSeconds / 2;
      selecting();
    }
  }, timeoutSeconds);
}

// global variables
// nee to initialize variables in select function scope
let idx: number = 0;
let arr: Element[] = [];
let selectingClass: string;
let selectedClass: string;
let direction = 1;
let gap = 1;
let maxRecursion = 2;
let curRecursion = 0;
let lastCallback: any;
const initialIntervalSeconds = 50;
const initialTimeoutSeconds = 3000;
let intervalSeconds = initialIntervalSeconds;
let timeoutSeconds = initialTimeoutSeconds;
let oneMoreCnt = 0;

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
  intervalSeconds = initialIntervalSeconds;
  timeoutSeconds = initialTimeoutSeconds;
  oneMoreCnt = 0;

  arr.forEach((elem) => {
    elem.classList.remove(selectingClass);
    elem.classList.remove(selectedClass);
  });

  selecting();
};

export default select;
