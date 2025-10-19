import { useLayoutEffect, useState } from 'react'

const useWindowResize = () => {
    const[windowSize, setWindowSize] = useState({
        width: 0,
        height: 0
    })

    function handleResize(){
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    function debounce(fn, delay) {
        let timeoutId;
        return function(...args){
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => fn(...args), delay);
        };
    }

    useLayoutEffect(() => {
        handleResize();

        const debouncedResize = debounce(handleResize, 100);
        window.addEventListener('resize', debouncedResize);

        return () => {
            window.removeEventListener('resize', debouncedResize);
        };
    },[])

  return (
    windowSize
  )
}

export default useWindowResize
