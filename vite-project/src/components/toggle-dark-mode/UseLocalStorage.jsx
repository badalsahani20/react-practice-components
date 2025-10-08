import { useEffect, useState } from 'react'

const UseLocalStorage = (key, defaultValue) => {
    const[value, setValue] = useState(() => {
        let curr;
        try {
            curr = JSON.parse(
                localStorage.getItem(key) || String(defaultValue)
            );
        } catch (error) {
            console.log(error.message);
            curr = defaultValue
        }
        return curr;
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value]);

    return [value, setValue];
}

export default UseLocalStorage