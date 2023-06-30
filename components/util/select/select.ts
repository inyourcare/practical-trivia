function scrollFollowing(arr: Element[], selectingClass: string) {
  const top = arr
    .filter((item) => item.classList.contains(selectingClass))
    .pop()
    ?.getBoundingClientRect().top;
  if (top) {
    const y = top + window.scrollY;
    window.scroll({
      top: y - 200,
      behavior: "smooth",
    });
  }
}

function selecting(
  arr: Element[],
  selectingClass: string,
  finalCallback: any,
  intervalSeconds: number,
  timeoutSeconds: number,
  idx:number
) {
  const intervalId = setInterval(() => {
    const realIdx = idx % arr.length;
    const prevIdx = (arr.length + idx - 1) % arr.length;
    arr[prevIdx].classList.remove(selectingClass);
    arr[realIdx].classList.add(selectingClass);
    idx += 1;
    scrollFollowing(arr, selectingClass);
  }, intervalSeconds);
  const timeoutId = setTimeout(() => {
    // console.log("clear timeout3");
    clearTimeout(intervalId);
    clearInterval(timeoutId);
    // setState({ ...state, lsLoading: false });
    finalCallback();
  }, timeoutSeconds);
}
const select = (arr: Element[], selectingClass: string, finalCallback: any) => {
  // let idx = Math.floor(Math.random() * (arr.length - 0 + 1) + 0);
  if (arr.length < 1) {
    finalCallback();
    return;
  }
  
  let idx = Math.floor(Math.random() * (arr.length - 0 + 1) + 0);
  arr.forEach(elem=>elem.classList.remove(selectingClass))

  selecting(
    arr,
    selectingClass,
    () =>
      selecting(
        arr,
        selectingClass,
        // () => selecting(arr, selectingClass, finalCallback, 200, 1000),
        finalCallback,
        100,
        2000,
        idx
      ),
    // finalCallback,
    50,
    3000,
    idx
  );
};

export default select;
