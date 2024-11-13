import { useEffect, useState } from 'react';

function useOffline() {
    const [isOffline, setIsOffline] = useState(false);

    // Set up handlers
    function onOffline() {
        setIsOffline(true);
    }

    function onOnline() {
        setIsOffline(false);
    }

    // Run this on mount only - due to []
    useEffect(() => {
        // Change state whenever these occur..
        window.addEventListener('offline', onOffline);
        window.addEventListener('online', onOnline);

        // Return a function removing these handlers on unmount
        return () => {
            window.removeEventListener('offline', onOffline);
            window.removeEventListener('online', onOnline);
        };
    }, []);

    // Return the state value...
    return isOffline;
}

export default useOffline;
