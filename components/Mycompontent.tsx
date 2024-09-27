import Link from 'next/link';
import React from 'react';

function MyComponent() {
    return (
        <div className="bg-neutral-base-default text-neutral-base-main dark:bg-neutral-base-inverted dark:text-neutral-base-white-fixed-dark">
            <h1 className="text-2xl text-brand-main dark:text-brand-strong">Welcome to My App</h1>
            <p className="text-neutral-base-weak dark:text-neutral-base-weak">This is a sample text demonstrating light and dark modes.</p>

            <button className="bg-success-main text-white py-2 px-4 rounded dark:bg-success-strong">
                Success Button
            </button>
            <Link className='link-neutral-base-default link-neutral-base-hover link-neutral-base-active' href="/">Home</Link>
            <button className="bg-error-main text-neutral-base-white-fixed-dark py-2 px-4 rounded mt-4 border-neutral-base-highlight dark:bg-error-weak">
                Error Button
            </button>
        </div>
    );
}

export default MyComponent;
