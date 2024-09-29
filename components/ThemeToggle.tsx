'use client'
import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    // Check the user's preferred color scheme on mount
    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark') {
            setDarkMode(true);
        }
    }, []);

    // Toggle dark mode and save preference in localStorage
    const toggleTheme = () => {
        setDarkMode((prev) => !prev);
        const newTheme = darkMode ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    return (
        <div className={`${darkMode ? 'bg-neutral-base-inverted' : 'bg-neutral-base-default'}`}>
            <h1 className="text-2xl text-neutral-base-main dark:text-neutral-base-white-fixed">Welcome to My App</h1>
            <p className='text-neutral-base-main dark:text-neutral-base-white-fixed'>This is a sample text demonstrating light and dark modes.</p>
            <button onClick={toggleTheme} className="mt-4 py-2 px-4 bg-brand-main rounded">
                Toggle Theme
            </button>
            <h1 className="display-sm-semibolditalic text-warning-strong dark:text-success-strong text-3xl border border-neutral-900 dark:border-neutral-100 font-bold mb-6">Color Tokens Example</h1>

            {/* Neutral Colors */}
            <section className="mb-8 heading-container heading h1">
                <h2 className="bg-neutral-base-inverted text-neutral-base-inverted text-2xl font-semibold mb-4">Neutral Colors</h2>
                <div className="grid grid-cols-3 gap-4">
                    <div
                        className={`h-16 rounded-lg bg-neutral-base-subtle flex items-center justify-center`}
                    >
                        <span className="text-h1 text-neutral-base-strong ">Neutral</span>
                    </div>
                </div>
            </section>

            {/* Success Alert */}
            <section className="mb-8 bg-success-strong">
                <h2 className="text-success-base text-2xl font-semibold mb-4">Success Alert</h2>
                <div className="p-4 bg-success-light border border-success-base rounded-lg">
                    <p className="text-success-base">This is a success alert!</p>
                </div>
            </section>

            {/* Error Alert */}
            <section className="mb-8 bg-warning-main border border-error-strong">
                <h2 className="text-error-base text-2xl font-semibold mb-4">Error Alert</h2>
                <div className="p-4 bg-error-light border border-error-base rounded-lg">
                    <p className="text-error-base">This is an error alert!</p>
                </div>
            </section>

            {/* Warning Alert */}
            <section className="mb-8 bg-brand-subtle border border-neutral-base-subtle">
                <h2 className="text-warning-base text-2xl font-semibold mb-4">Warning Alert</h2>
                <div className="p-4 bg-warning-light border border-warning-base rounded-lg">
                    <p className="subtitle-md-bold text-warning-base">This is a warning alert!</p>
                </div>
            </section>

            {/* Brand Button */}
            <section>
                <h2 className="text-brand-base text-2xl font-semibold mb-4">Brand Button</h2>
                <button className="bg-brand-base text-white py-2 px-4 rounded-lg hover:bg-brand-dark">
                    Brand Button
                </button>
            </section>

            {/* Styled Anchor Link */}
            <section className="mt-4">
                <h2 className="text-neutral-base-main dark:text-neutral-base-white-fixed text-2xl font-semibold mb-4">Styled Link</h2>
                <a
                    href="#"
                    className={`text-link-neutral-base-default dark:text-link-neutral-base-default-on-solid hover:text-link-neutral-base-hover active:text-link-neutral-base-active dark:hover:text-link-neutral-base-hover-on-solid dark:active:text-link-neutral-base-active-on-solid`}
                >
                    Link with Dynamic Color
                </a>
            </section>
        </div>
    );
};

export default ThemeToggle;
