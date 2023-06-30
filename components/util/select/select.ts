function floatingImage(imageUrl: string, text: string) {
  const container = document.getElementById("food-roulette-container");
  if (container) {
    console.log(
      container.clientTop,
      container.clientLeft,
      container.clientHeight
    );
    let div = document.createElement("div");
    div.style.position = "absolute";
    div.style.top = `${container.getBoundingClientRect().top}px`;
    div.style.left = `${container.getBoundingClientRect().left}px`;
    div.style.width = `${container.clientWidth}px`;
    div.style.height = `${container.clientHeight}px`;
    div.classList.add("flex");
    div.classList.add("justify-center");
    let box = document.createElement("div");
    // box.classList.add("w-full");
    box.classList.add("flex");
    box.classList.add("justify-center");
    box.classList.add("flex-col");
    box.style.position = "fixed";
    box.style.top = "10%";
    let img = document.createElement("img");
    img.src = imageUrl;
    img.style.width = "500px";
    img.style.height = "500px";
    let p = document.createElement("p");
    p.textContent = text;
    p.classList.add("text-center");
    p.classList.add("font-black");
    p.classList.add("text-2xl");
    box.append(img);
    box.append(p);
    // div.append(img);
    // div.append(p);
    div.append(box);
    container.appendChild(div);
    // document.body.appendChild(div);
    const timeout = setTimeout(() => {
      // document.body.removeChild(div);
      container.removeChild(div);
    }, 1000);
  }
}
export function drawKong() {
  console.log("kong");
  floatingImage("/images/roulette/kong-transparent.png", "222222222222");
}
function drawTurky() {
  console.log("kong");
  floatingImage("/images/roulette/turky-transparent.png", "힝 속았지");
}

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

    // console.log(idx,realIdx)
  }, intervalSeconds);
  const timeoutId = setTimeout(() => {
    clearTimeout(intervalId);
    clearInterval(timeoutId);
    curRecursion += 1;
    if (maxRecursion <= curRecursion) {
      const ran = Math.random();
      // const ran = 0.2;
      // const ran = 0.5;
      if (ran < 0.33 && oneMoreCnt < 1) {
        // if (1 > 0.5 && oneMoreCnt < 1) {
        // one more kong time
        drawKong();
        console.log("baby one more time");
        curRecursion = 0;
        intervalSeconds = initialIntervalSeconds;
        timeoutSeconds = initialTimeoutSeconds;
        oneMoreCnt += 1;
        selecting();
      } else if (ran > 0.33 && ran < 0.66 && oneMoreCnt < 1) {
        drawTurky();
        console.log("baby one more turn over time");
        direction = -1 * direction;
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
  direction = 1;
  gap = 1;
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
