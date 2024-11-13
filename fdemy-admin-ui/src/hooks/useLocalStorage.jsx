import { useState } from 'react';

function useLocalStorage(key, initialValue) {
    const [item, setInnerValue] = useState(() => {
        try {
            return window.localStorage.getItem(key) ? JSON.parse(window.localStorage.getItem(key)) : initialValue;
        } catch (error) {
            return initialValue;
        }
    });

    const setValue = (value) => {
        try {
            setInnerValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.log(e);
        }
    };

    // Alternatively we could update localStorage inside useEffect ...
    // ... but this would run every render and it really only needs ...
    // ... to happen when the returned setValue function is called.
    /*
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  });
  */

    return [item, setValue];
}

export default useLocalStorage;
