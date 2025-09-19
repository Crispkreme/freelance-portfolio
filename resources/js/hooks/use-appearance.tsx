import { useEffect, useState } from 'react';

export type Appearance = 'light';

// Remove dark and system, only light supported now.

const applyTheme = (appearance: Appearance) => {
    // Always remove 'dark' class to force light theme
    document.documentElement.classList.remove('dark');
};

export function initializeTheme() {
    const savedAppearance = (localStorage.getItem('appearance') as Appearance) || 'light';

    applyTheme(savedAppearance);
    // No need for event listeners anymore
}

export function useAppearance() {
    const [appearance, setAppearance] = useState<Appearance>('light');

    const updateAppearance = (mode: Appearance) => {
        setAppearance(mode);
        localStorage.setItem('appearance', mode);
        applyTheme(mode);
    };

    useEffect(() => {
        const savedAppearance = localStorage.getItem('appearance') as Appearance | null;
        updateAppearance(savedAppearance || 'light');

        // No event listener cleanup needed
    }, []);

    return { appearance, updateAppearance };
}