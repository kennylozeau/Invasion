function debounce(fn, interval) {
    let timeout;
  
    return (...args) => {
      const fnCall = () => {
        timeout = null;
        fn(...args)
      }
      clearTimeout(timeout);
      timeout = setTimeout(fnCall, interval);
    }
  }
  
export default debounce;