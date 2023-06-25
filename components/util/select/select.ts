const select = (arr: Element[], selectingClass: string, finalCallback: any) => {
  let idx = Math.floor(Math.random() * (arr.length - 0 + 1) + 0);
  const intervalId = setInterval(() => {
    const realIdx = idx % arr.length;
    const prevIdx = (arr.length + idx - 1) % arr.length;
    arr[prevIdx].classList.remove(selectingClass);
    arr[realIdx].classList.add(selectingClass);
    idx += 1;
  }, 50);
  const timeoutId = setTimeout(() => {
    console.log("clear timeout");
    clearTimeout(timeoutId);
    clearInterval(intervalId);
    // setState({ ...state, lsLoading: false });
    const intervalId2 = setInterval(() => {
      const realIdx = idx % arr.length;
      const prevIdx = (arr.length + idx - 1) % arr.length;
      arr[prevIdx].classList.remove(selectingClass);
      arr[realIdx].classList.add(selectingClass);
      idx += 1;
    }, 100);
    const timeoutId2 = setTimeout(() => {
      console.log("clear timeout2");
      clearTimeout(timeoutId2);
      clearInterval(intervalId2);
      // setState({ ...state, lsLoading: false });

      const intervalId3 = setInterval(() => {
        const realIdx = idx % arr.length;
        const prevIdx = (arr.length + idx - 1) % arr.length;
        arr[prevIdx].classList.remove(selectingClass);
        arr[realIdx].classList.add(selectingClass);
        idx += 1;
      }, 200);
      const timeoutId3 = setTimeout(() => {
        console.log("clear timeout3");
        clearTimeout(timeoutId3);
        clearInterval(intervalId3);
        // setState({ ...state, lsLoading: false });
        finalCallback();
      }, 1000);
    }, 2000);
  }, 3000);
};

export default select;
