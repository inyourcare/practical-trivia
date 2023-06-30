function scrollFollowing(item: Element, selectingClass: string) {
  // const top = arr
  //   .filter((item) => item.classList.contains(selectingClass))
  //   .pop()
  //   ?.getBoundingClientRect().top;
  const top = item.getBoundingClientRect().top;
  if (top) {
    const y = top + window.scrollY;
    window.scroll({
      top: y - 200,
      behavior: "smooth",
    });
  }
}
function afterSelected(
  arr: Element[],
  selectingClass: string,
  selectedClass: string,
  finalCallback: any
) {
  const selected = arr
    .filter((item) => item.classList.contains(selectingClass))
    .pop();
  selected?.classList.remove(selectingClass);
  selected?.classList.add(selectedClass);
  finalCallback();
}
function selecting(
  arr: Element[],
  selectingClass: string,
  callback: any,
  intervalSeconds: number,
  timeoutSeconds: number
  // idx: number
) {
  const intervalId = setInterval(() => {
    const realIdx = Math.abs(idx) % arr.length;
    // console.log('interval realidx', realIdx , intervalSeconds, timeoutSeconds)
    const prevIdx = (arr.length + idx - 1) % arr.length;
    const afterIdx = (arr.length + idx + 1) % arr.length;
    arr[prevIdx].classList.remove(selectingClass);
    arr[afterIdx].classList.remove(selectingClass);
    arr[realIdx].classList.add(selectingClass);
    idx += 1;
    scrollFollowing(arr[realIdx], selectingClass);
  }, intervalSeconds);
  const timeoutId = setTimeout(() => {
    // console.log("clear timeout3");
    clearTimeout(intervalId);
    clearInterval(timeoutId);
    // setState({ ...state, lsLoading: false });
    callback();
  }, timeoutSeconds);
}

let idx: number = 0;
const select = (
  arr: Element[],
  selectingClass: string,
  selectedClass: string,
  finalCallback: any
) => {
  // let idx = Math.floor(Math.random() * (arr.length - 0 + 1) + 0);
  if (arr.length < 1) {
    finalCallback();
    return;
  }

  // let idx = Math.floor(Math.random() * (arr.length - 0 + 1) + 0);
  idx = Math.floor(Math.random() * (arr.length - 0 + 1) + 0);

  arr.forEach((elem) => {
    elem.classList.remove(selectingClass);
    elem.classList.remove(selectedClass);
  });

  selecting(
    arr,
    selectingClass,
    () =>
      selecting(
        arr,
        selectingClass,
        () =>
          selecting(
            arr,
            selectingClass,
            () =>
              afterSelected(arr, selectingClass, selectedClass, finalCallback),
            200,
            1000
          ),
        // () => {
        //   afterSelected(arr, selectingClass, selectedClass, finalCallback);
        // },
        100,
        2000
        // idx
      ),
    // finalCallback,
    50,
    3000
    // idx
  );
};

export default select;
