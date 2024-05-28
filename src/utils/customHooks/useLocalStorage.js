import { useState, useEffect } from 'react'

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        // Initial state is set only when running in the browser
        if (typeof window === 'undefined') {
            return initialValue
        }
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            console.log(error)
            return initialValue
        }
    })

    useEffect(() => {
        // This effect runs only on the client-side
        if (typeof window !== 'undefined') {
            try {
                // Update localStorage when storedValue changes
                window.localStorage.setItem(key, JSON.stringify(storedValue))
            } catch (error) {
                console.log(error)
            }
        }
    }, [storedValue, key])

    const setValue = (value) => {
        try {
            const valueToStore =
                value instanceof Function ? value(storedValue) : value
            setStoredValue(valueToStore)
        } catch (error) {
            console.log(error)
        }
    }

    return [storedValue, setValue]
}

export default useLocalStorage
