/** @type {import('tailwindcss').Config} */
// tailwind.config.js
import { neutral, success, error, warning, brand } from "./color";


// const spacingUnits = () => {
//     const units = {};
//     // Define the range for units (e.g., from 0 to 160)
//     for (let i = 0; i <= 160; i += 2) {
//         units[`unit-${i}`] = `${i}px`; // Generate the unit classes like unit-0, unit-2, etc.
//     }
//     return units;
// };


module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class',
    theme: {
        neutral: neutral,
        success: success,
        error: error,
        warning: warning,
        brand: brand,
        extend: {
            backgroundColor: {
                neutral: {
                    base: {
                        'default': 'var(--base-white-100)', //
                        'default-alt': 'var(--base-white-100)',//
                        'subtle': 'var(--tw-color-neutral-50)',
                        'subtle-alt': 'var(--tw-color-50)',
                        'highlight': 'var(--tw-color-neutral-100)',
                        'highlight-alt': 'var(--tw-color-neutral-neutral-200)',
                        'inverted': 'var(--tw-color-neutral-950)',
                        'weak': 'var(--tw-color-neutral-600)',
                        'main': 'var(--tw-color-neutral-700)',
                        'strong': 'var(--tw-color-neutral-800)',
                        'divider': 'var(--base-black-10)', //
                        'disabled': 'var(--base-black-5)', //
                        'selection': 'var(--base-black-10)', //
                        'overlay': 'var(--base-black-60)', //
                        'solid': 'var(--tw-color-neutral-950)',
                        'solid-alt': 'var(--tw-color-900)',
                        'divider-on-solid': 'var(--base-white-10)', //
                        'disabled-on-solid': 'var(--base-white-10)', //
                    }
                },
                brand: {
                    'subtle': 'var(--tw-color-brand-50)',
                    'highlight': 'var(--tw-color-brand-100)',
                    'weak': 'var(--tw-color-brand-400)',
                    'main': 'var(--tw-color-brand-500)',
                    'strong': 'var(--tw-color-brand-600)',
                    'solid': 'var(--tw-color-brand-800)',
                },
                success: {
                    'subtle': 'var(--tw-color-success-50)',
                    'highlight': 'var(--tw-color-success-100)',
                    'weak': 'var(--tw-color-success-400)',
                    'main': 'var(--tw-color-success-500)',
                    'strong': 'var(--tw-color-success-600)',
                },
                warning: {
                    'subtle': 'var(--tw-color-warning-50)',
                    'highlight': 'var(--tw-color-warning-100)',
                    'weak': 'var(--tw-color-warning-400)',
                    'main': 'var(--tw-color-warning-500)',
                    'strong': 'var(--tw-color-warning-600)',
                },
                error: {
                    'subtle': 'var(--tw-color-error-50)',
                    'highlight': 'var(--tw-color-error-100)',
                    'weak': 'var(--tw-color-error-400)',
                    'main': 'var(--tw-color-error-500)',
                    'strong': 'var(--tw-color-error-600)',
                },
            },
            borderColor: {
                neutral: {
                    base: {
                        'subtle': 'var(--tw-color-neutral-200)',
                        'subtle-alt': 'var(--tw-color-neutral-100)',
                        'highlight': 'var(--tw-color-neutral-300)',
                        'weak': 'var(--tw-color-neutral-600)',
                        'main': 'var(--tw-color-neutral-700)',
                        'strong': 'var(--tw-color-neutral-800)',
                        'divider': 'var(--base-black-10)', // withsome %
                        'disabled': 'var(--base-black-10)',// withsome %
                        'subtle-on-solid': 'var(--tw-color-neutral-700)',
                        'highlight-on-solid': 'var(--tw-color-neutral-600)',
                        'divider-on-solid': 'var(--base-white-10)',// withsome %
                        'disabled-on-solid': 'var(--base-white-10)',// withsome %}
                    }
                },
                brand: {
                    'subtle': 'var(--tw-color-brand-200)',
                    'highlight': 'var(--tw-color-brand-300)',
                    'weak': 'var(--tw-color-brand-400)',
                    'main': 'var(--tw-color-brand-500)',
                    'strong': 'var(--tw-color-brand-600)',
                    'subtle-on-solid': 'var(--tw-color-brand-700)',
                    'highlight-on-solid': 'var(--tw-color-brand-600)',
                },
                success: {
                    'subtle': 'var(--tw-color-success-200)',
                    'highlight': 'var(--tw-color-success-300)',
                    'main': 'var(--tw-color-success-500)',
                    'strong': 'var(--tw-color-success-600)',
                },
                warning: {
                    'subtle': 'var(--tw-color-warning-200)',
                    'highlight': 'var(--tw-color-warning-300)',
                    'main': 'var(--tw-color-warning-500)',
                    'strong': 'var(--tw-color-warning-600)',
                },
                error: {
                    'subtle': 'var(--tw-color-error-200)',
                    'highlight': 'var(--tw-color-error-300)',
                    'main': 'var(--tw-color-error-500)',
                    'strong': 'var(--tw-color-error-600)',
                },
            },
            textColor: {
                link: {
                    neutral: {
                        base: {
                            'default': 'var(--tw-color-neutral-800)',
                            'hover': 'var(--tw-color-brand-500)',
                            'active': 'var(--tw-color-neutral-600)',
                            'default-on-solid': 'var(--tw-color-neutral-200)',
                            'hover-on-solid': 'var(--tw-color-brand-400)',
                            'active-on-solid': 'var(--tw-color-neutral-400)',
                        }
                    },
                    brand: {
                        'default': 'var(--tw-color-brand-500)',
                        'hover': 'var(--tw-color-neutral-800)',
                        'active': 'var(--tw-color-neutral-600)',
                        'default-on-solid': 'var(--tw-color-brand-400)',
                        'hover-on-solid': 'var(--tw-color-brand-200)',
                        'active-on-solid': 'var(--tw-color-neutral-400)',
                    },
                    success: {
                        'default': 'var(--tw-color-success-500)',
                        'hover': 'var(--tw-color-success-600)',
                        'active': 'var(--tw-color-success-400)',
                    },
                    warning: {
                        'default': 'var(--tw-color-warning-500)',
                        'hover': 'var(--tw-color-warning-600)',
                        'active': 'var(--tw-color-warning-400)',
                    },
                    error: {
                        'default': 'var(--tw-color-error-500)',
                        'hover': 'var(--tw-color-error-600)',
                        'active': 'var(--tw-color-error-400)',
                    },
                },
                neutral: {
                    base: {
                        'stronger': 'var(--tw-color-neutral-900)',
                        'strong': 'var(--tw-color-neutral-800)',
                        'main': 'var(--tw-color-neutral-700)',
                        'weak': 'var(--tw-color-neutral-600)',
                        'inverted': 'var(--base-white-100)', //
                        'white-fixed': 'var(--base-white-100)', //
                        'placeholder': 'var(--base-black-40)', // 
                        'disabled': 'var(--base-black-20)', // 
                        'stronger-on-solid': 'var(--tw-color-neutral-50)',
                        'strong-on-solid': 'var(--tw-color-neutral-100)',
                        'main-on-solid': 'var(--tw-color-neutral-200)',
                        'weak-on-solid': 'var(--tw-color-neutral-300)',
                        'disabled-on-solid': 'var(--base-white-20)', //
                    }
                },
                brand: {
                    'stronger': 'var(--tw-color-brand-700)',
                    'weak': 'var(--tw-color-brand-400)',
                    'main': 'var(--tw-color-brand-500)',
                    'strong': 'var(--tw-color-brand-600)',
                    'strong-on-solid': 'var(--tw-color-brand-100)',
                    'weak-on-solid': 'var(--tw-color-brand-200)',
                },
                success: {
                    'main': 'var(--tw-color-success-500)',
                    'strong': 'var(--tw-color-success-600)',
                    'weak': 'var(--tw-color-success-400)',
                },
                warning: {
                    'main': 'var(--tw-color-warning-500)',
                    'strong': 'var(--tw-color-warning-600)',
                    'weak': 'var(--tw-color-warning-400)',
                },
                error: {
                    'main': 'var(--tw-color-error-500)',
                    'strong': 'var(--tw-color-error-600)',
                    'weak': 'var(--tw-color-error-400)',
                },
            },
            foregroundColor: {
                neutral: {
                    base: {
                        'stronger': 'var(--tw-color-neutral-900)',
                        'strong': 'var(--tw-color-neutral-800)',
                        'main': 'var(--tw-color-neutral-700)',
                        'weak': 'var(--tw-color-neutral-600)',
                        'inverted': 'var(--base-white-100)', //
                        'white-fixed': 'var(--base-white-100)', //
                        'placeholder': 'var(--base-black-20)', // 
                        'disabled': 'var(--base-black-40)', // 
                        'strong-on-solid': 'var(--tw-color-neutral-100)',
                        'main-on-solid': 'var(--base-white-20)',
                    }
                },
                brand: {
                    'display': 'var(--tw-color-brand-700)',
                    'strong': 'var(--tw-color-brand-600)',
                    'main': 'var(--tw-color-brand-500)',
                    'weak': 'var(--tw-color-brand-400)',
                    'display-on-solid': 'var(--tw-color-brand-200)',
                    'strong-on-solid': 'var(--tw-color-brand-300)',
                    'main-on-solid': 'var(--tw-color-brand-400)',
                    'weak-on-solid': 'var(--tw-color-brand-500)',
                },
                success: {
                    'main': 'var(--tw-color-success-500)',
                    'strong': 'var(--tw-color-success-600)',
                    'weak': 'var(--tw-color-success-400)',
                    'display': 'var(--tw-color-success-700)',
                },
                warning: {
                    'main': 'var(--tw-color-warning-500)',
                    'strong': 'var(--tw-color-warning-600)',
                    'weak': 'var(--tw-color-warning-400)',
                    'display': 'var(--tw-color-warning-700)',
                },
                error: {
                    'main': 'var(--tw-color-error-500)',
                    'strong': 'var(--tw-color-error-600)',
                    'weak': 'var(--tw-color-error-400)',
                    'display': 'var(--tw-color-error-700)',
                },
            },
            darkMode: {
                backgroundColor: {
                    neutral: {
                        base: {
                            'default': 'var(--tw-color-neutral-950)',
                            'default-alt': 'var(--tw-color-neutral-900)',
                            'subtle': 'var(--tw-color-neutral-900)',
                            'subtle-alt': 'var(--tw-color-950)',
                            'highlight': 'var(--tw-color-neutral-800)',
                            'highlight-alt': 'var(--tw-colo-neutral-neutral-700)',
                            'inverted': 'var(--tw-color-neutral-50)',
                            'weak': 'var(--tw-color-neutral-300)',
                            'main': 'var(--tw-color-neutral-200)',
                            'strong': 'var(--tw-color-neutral-100)',
                            'divider': 'var(--base-white-10)', //
                            'disabled': 'var(--base-white-20)', //
                            'selection': 'var(--base-black-10)', //
                            'overlay': 'var(--base-black-60)', //
                            'solid': 'var(--tw-color-neutral-950)',
                            'solid-alt': 'var(--tw-color-900)',
                            'divider-on-solid': 'var(--base-white-10)', //
                            'disabled-on-solid': 'var(--base-white-20)', //
                        }
                    },
                    brand: {
                        'subtle': 'var(--tw-color-brand-950)',
                        'highlight': 'var(--tw-color-brand-800)',
                        'weak': 'var(--tw-color-brand-600)',
                        'main': 'var(--tw-color-brand-500)',
                        'strong': 'var(--tw-color-brand-400)',
                        'solid': 'var(--tw-color-brand-900)',
                    },
                    success: {
                        'subtle': 'var(--tw-color-success-950)',
                        'highlight': 'var(--tw-color-success-800)',
                        'weak': 'var(--tw-color-success-600)',
                        'main': 'var(--tw-color-success-500)',
                        'strong': 'var(--tw-color-success-400)',
                    },
                    warning: {
                        'subtle': 'var(--tw-color-warning-950)',
                        'highlight': 'var(--tw-color-warning-800)',
                        'weak': 'var(--tw-color-warning-600)',
                        'main': 'var(--tw-color-warning-500)',
                        'strong': 'var(--tw-color-warning-400)',
                    },
                    error: {
                        'subtle': 'var(--tw-color-error-950)',
                        'highlight': 'var(--tw-color-error-800)',
                        'weak': 'var(--tw-color-error-600)',
                        'main': 'var(--tw-color-error-500)',
                        'strong': 'var(--tw-color-error-400)',
                    },
                },
                borderColor: {
                    neutral: {
                        base: {
                            'subtle': 'var(--tw-color-neutral-700)',
                            'subtle-alt': 'var(--tw-color-neutral-800)',
                            'highlight': 'var(--tw-color-neutral-600)',
                            'weak': 'var(--tw-color-neutral-800)',
                            'main': 'var(--tw-color-neutral-700)',
                            'strong': 'var(--tw-color-neutral-600)',
                            'divider': 'var(--base-white-10)', // withsome %
                            'disabled': 'var(--base-white-10)',// withsome %
                            'subtle-on-solid': 'var(--tw-color-neutral-700)',
                            'highlight-on-solid': 'var(--tw-color-neutral-600)',
                            'divider-on-solid': 'var(--base-white-10)',// withsome %
                            'disabled-on-solid': 'var(--base-white-10)',// withsome %}
                        }
                    },
                    brand: {
                        'subtle': 'var(--tw-color-brand-800)',
                        'highlight': 'var(--tw-color-brand-700)',
                        'weak': 'var(--tw-color-brand-700)',
                        'main': 'var(--tw-color-brand-800)',
                        'strong': 'var(--tw-color-brand-900)',
                        'subtle-on-solid': 'var(--tw-color-brand-700)',
                        'highlight-on-solid': 'var(--tw-color-brand-600)',
                    },
                    success: {
                        'subtle': 'var(--tw-color-success-700)',
                        'highlight': 'var(--tw-color-success-600)',
                        'main': 'var(--tw-color-success-400)',
                        'strong': 'var(--tw-color-success-300)',
                    },
                    warning: {
                        'subtle': 'var(--tw-color-warning-700)',
                        'highlight': 'var(--tw-color-warning-600)',
                        'main': 'var(--tw-color-warning-400)',
                        'strong': 'var(--tw-color-warning-300)',
                    },
                    error: {
                        'subtle': 'var(--tw-color-error-700)',
                        'highlight': 'var(--tw-color-error-600)',
                        'main': 'var(--tw-color-error-400)',
                        'strong': 'var(--tw-color-error-300)',
                    },
                },
                textColor: {
                    link: {
                        neutral: {
                            base: {
                                'default': 'var(--tw-color-neutral-200)',
                                'hover': 'var(--tw-color-brand-500)',
                                'active': 'var(--tw-color-neutral-400)',
                                'default-on-solid': 'var(--tw-color-neutral-800)',
                                'hover-on-solid': 'var(--tw-color-brand-600)',
                                'active-on-solid': 'var(--tw-color-neutral-600)',
                            }
                        },
                        brand: {
                            'default': 'var(--tw-color-brand-500)',
                            'hover': 'var(--tw-color-neutral-200)',
                            'active': 'var(--tw-color-neutral-400)',
                            'default-on-solid': 'var(--tw-color-brand-600)',
                            'hover-on-solid': 'var(--tw-color-brand-800)',
                            'active-on-solid': 'var(--tw-color-neutral-600)',
                        },
                        success: {
                            'default': 'var(--tw-color-success-400)',
                            'hover': 'var(--tw-color-success-300)',
                            'active': 'var(--tw-color-success-500)',
                        },
                        warning: {
                            'default': 'var(--tw-color-warning-400)',
                            'hover': 'var(--tw-color-warning-300)',
                            'active': 'var(--tw-color-warning-500)',
                        },
                        error: {
                            'default': 'var(--tw-color-error-400)',
                            'hover': 'var(--tw-color-error-300)',
                            'active': 'var(--tw-color-error-500)',
                        },
                    },
                    neutral: {
                        base: {
                            'stronger': 'var(--tw-color-neutral-50)',
                            'strong': 'var(--tw-color-neutral-100)',
                            'main': 'var(--tw-color-neutral-200)',
                            'weak': 'var(--tw-color-neutral-300)',
                            'inverted': 'var(--tw-color-neutral-900)',
                            'white-fixed': 'var(--base-white-100)', //
                            'placeholder': 'var(--base-white-40)', // 
                            'disabled': 'var(--base-white-20)', // 
                            'stronger-on-solid': 'var(--tw-color-neutral-50)',
                            'strong-on-solid': 'var(--tw-color-neutral-100)',
                            'main-on-solid': 'var(--tw-color-neutral-200)',
                            'weak-on-solid': 'var(--tw-color-neutral-300)',
                            'disabled-on-solid': 'var(--base-white-20)', //
                        }
                    },
                    brand: {
                        'stronger': 'var(--tw-color-brand-200)',
                        'weak': 'var(--tw-color-brand-300)',
                        'main': 'var(--tw-color-brand-400)',
                        'strong': 'var(--tw-color-brand-500)',
                        'strong-on-solid': 'var(--tw-color-brand-100)',
                        'weak-on-solid': 'var(--tw-color-brand-200)',
                    },
                    success: {
                        'main': 'var(--tw-color-success-300)',
                        'strong': 'var(--tw-color-success-400)',
                        'weak': 'var(--tw-color-success-500)',
                    },
                    warning: {
                        'main': 'var(--tw-color-warning-300)',
                        'strong': 'var(--tw-color-warning-400)',
                        'weak': 'var(--tw-color-warning-500)',
                    },
                    error: {
                        'main': 'var(--tw-color-error-300)',
                        'strong': 'var(--tw-color-error-400)',
                        'weak': 'var(--tw-color-error-600)',
                    },
                },
                foregroundColor: {
                    neutral: {
                        base: {
                            'stronger': 'var(--tw-color-neutral-50)',
                            'strong': 'var(--tw-color-neutral-100)',
                            'main': 'var(--tw-color-neutral-200)',
                            'weak': 'var(--tw-color-neutral-300)',
                            'inverted': 'var(--tw-color-neutral-900)',
                            'white-fixed': 'var(--base-white-100)', //
                            'placeholder': 'var(--base-white-20)', // 
                            'disabled': 'var(--base-white-40)', // 
                            'strong-on-solid': 'var(--tw-color-neutral-200)',
                            'main-on-solid': 'var(--tw-color-neutral-300)',
                        }
                    },
                    brand: {
                        'display': 'var(--tw-color-brand-200)',
                        'strong': 'var(--tw-color-brand-300)',
                        'main': 'var(--tw-color-brand-400)',
                        'weak': 'var(--tw-color-brand-500)',
                        'display-on-solid': 'var(--tw-color-brand-200)',
                        'strong-on-solid': 'var(--tw-color-brand-300)',
                        'main-on-solid': 'var(--tw-color-brand-400)',
                        'weak-on-solid': 'var(--tw-color-brand-500)',
                    },
                    success: {
                        'main': 'var(--tw-color-success-200)',
                        'strong': 'var(--tw-color-success-300)',
                        'weak': 'var(--tw-color-success-400)',
                        'display': 'var(--tw-color-success-500)',
                    },
                    warning: {
                        'main': 'var(--tw-color-warning-200)',
                        'strong': 'var(--tw-color-warning-300)',
                        'weak': 'var(--tw-color-warning-400)',
                        'display': 'var(--tw-color-warning-500)',
                    },
                    error: {
                        'main': 'var(--tw-color-error-200)',
                        'strong': 'var(--tw-color-error-300)',
                        'weak': 'var(--tw-color-error-400)',
                        'display': 'var(--tw-color-error-500)',
                    },
                },
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
            fontSize: {
                // Add custom font sizes linked to CSS variables
                'display-lg': 'var(--font-size-display-lg)',
                'display-md': 'var(--font-size-display-md)',
                'display-sm': 'var(--font-size-display-sm)',
                'h1': ['48px', '3rem'], // font-size / line-height for H1
                'h2': ['38px', '2.375rem'], // font-size / line-height for H2
                'h3': ['28px', '1.75rem'], // font-size / line-height for H3
                'subtitle-md': 'var(--font-size-subtitle-md)',
                'subtitle-sm': 'var(--font-size-subtitle-sm)',
                'body-xl': 'var(--font-size-body-xl)',
                'body-lg': 'var(--font-size-body-lg)',
                'body-md': 'var(--font-size-body-md)',
                'body-sm': 'var(--font-size-body-sm)',
                'body-xs': 'var(--font-size-body-xs)',
                'label-lg': 'var(--font-size-label-lg)',
                'label-md': 'var(--font-size-label-md)',
                'label-sm': 'var(--font-size-label-sm)',
            },
            lineHeight: {
                // Add custom line heights linked to CSS variables
                'display-lg': 'var(--line-height-display-lg)',
                'display-md': 'var(--line-height-display-md)',
                'display-sm': 'var(--line-height-display-sm)',
                'h1': '60px', // Line height for H1
                'h2': '48px', // Line height for H2
                'h3': '36px', // Line height for H3
                'subtitle-md': 'var(--line-height-subtitle-md)',
                'subtitle-sm': 'var(--line-height-subtitle-sm)',
                'body-xl': 'var(--line-height-body-xl)',
                'body-lg': 'var(--line-height-body-lg)',
                'body-md': 'var(--line-height-body-md)',
                'body-sm': 'var(--line-height-body-sm)',
                'body-xs': 'var(--line-height-body-xs)',
                'label-lg': 'var(--line-height-label-lg)',
                'label-md': 'var(--line-height-label-md)',
                'label-sm': 'var(--line-height-label-sm)',
            },
            fontWeight: {
                // Add custom font weights linked to CSS variables
                regular: 'var(--font-weight-regular)',
                semibold: 'var(--font-weight-semibold)',
                bold: 'var(--font-weight-bold)',
                medium: 'var(--font-weight-medium)',
            },
            fontStyle: {
                italic: 'var(--font-style-italic)',
            },
            // spacing: spacingUnits(),
            spacing: {
                'none': '0px',
                '3xs': '2px',    // #spacing-3xs
                '2xs': '4px',    // #spacing-2xs
                'sm-alpha': '6px',  // #spacing-sm-alpha
                'md': '8px',     // #spacing-md
                'md-alpha': '10px',  // #spacing-md-alpha
                'lg': '12px',    // #spacing-lg
                'lg-alpha': '14px',  // #spacing-lg-alpha
                'xl': '16px',    // #spacing-xl
                'xl-alpha': '18px',  // #spacing-xl-alpha
                '2xl': '20px',   // #spacing-2xl
                '2xl-alpha': '22px',  // #spacing-2xl-alpha
                '3xl': '24px',   // #spacing-3xl
                '4xl': '32px',   // #spacing-4xl
                '5xl': '40px',   // #spacing-5xl
                '6xl': '48px',   // #spacing-6xl
                '7xl': '56px',   // #spacing-7xl
                '8xl': '64px',   // #spacing-8xl
                '9xl': '80px',   // #spacing-9xl
                '10xl': '96px',  // #spacing-10xl
                '11xl': '128px', // #spacing-11xl
                '12xl': '160px', // #spacing-12xl

                'size-12': '12px',
                'size-16': '16px',
                'size-20': '20px',
                'size-24': '24px',
                'size-32': '32px',
                'size-48': '48px',
                'size-64': '64px',
                'size-80': '80px',
                'size-96': '96px',
                'size-112': '112px',
                'size-128': '128px',
                'size-144': '144px',
                'size-160': '160px',
                'size-176': '176px',
                'size-192': '192px',
                'size-208': '208px',
                'size-224': '224px',
                'size-240': '240px',
                'size-256': '256px',
                'size-288': '288px',
                'size-320': '320px',
                'size-384': '384px',
                'size-448': '448px',
                'size-512': '512px',
                'size-576': '576px',
                'size-640': '640px',
            },
            borderRadius: {
                'none': '0px',    // #radius-none
                'sm': '2px',      // #radius-sm
                'md': '4px',      // #radius-md
                'lg': '6px',      // #radius-lg
                'xl': '8px',      // #radius-xl
                '2xl': '12px',    // #radius-2xl
                '3xl': '16px',    // #radius-3xl
                '4xl': '20px',    // #radius-4xl
                '5xl': '24px',    // #radius-5xl
                '6xl': '28px',    // #radius-6xl
                '7xl': '32px',    // #radius-7xl
                'round': '9999px' // #radius-round
            },
        }
    },
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                '.display-lg-semibolditalic': {
                    fontSize: 'var(--font-size-display-lg)',
                    lineHeight: 'var(--line-height-display-lg)',
                    letterSpacing: 'var(--font-letterSpacing)',
                    fontWeight: 'var(--font-weight-semibold)',
                    fontStyle: 'var(--font-style-italic)',
                    marginBottom: 'var(--para-spacing-lg)',
                },
                '.display-lg-bolditalic': {
                    fontSize: 'var(--font-size-display-lg)',
                    lineHeight: 'var(--line-height-display-lg)',
                    letterSpacing: 'var(--font-letterSpacing)',
                    fontWeight: 'var(--font-weight-bold)',
                    fontStyle: 'var(--font-style-italic)',
                },
                '.display-lg-mediumitalic': {
                    fontSize: 'var(--font-size-display-lg)',
                    lineHeight: 'var(--line-height-display-lg)',
                    letterSpacing: 'var(--font-letterSpacing)',
                    fontWeight: 'var(--font-weight-medium)',
                    fontStyle: 'var(--font-style-italic)',
                },
                '.display-lg-regular': {
                    fontSize: 'var(--font-size-display-lg)',
                    lineHeight: 'var(--line-height-display-lg)',
                    letterSpacing: 'var(--font-letterSpacing)',
                    fontWeight: 'var(--font-weight-regular)', // regular weight
                },
                '.display-lg-semibold': {
                    fontSize: 'var(--font-size-display-lg)',
                    lineHeight: 'var(--line-height-display-lg)',
                    letterSpacing: 'var(--font-letterSpacing)',
                    fontWeight: 'var(--font-weight-semibold)',
                },
                '.display-lg-bold': {
                    fontSize: 'var(--font-size-display-lg)',
                    lineHeight: 'var(--line-height-display-lg)',
                    letterSpacing: 'var(--font-letterSpacing)',
                    fontWeight: 'var(--font-weight-bold)',
                },
                '.display-lg-medium': {
                    fontSize: 'var(--font-size-display-lg)',
                    lineHeight: 'var(--line-height-display-lg)',
                    letterSpacing: 'var(--font-letterSpacing)',
                    fontWeight: 'var(--font-weight-medium)',
                },
                '.display-lg-italic': {
                    fontSize: 'var(--font-size-display-lg)',
                    lineHeight: 'var(--line-height-display-lg)',
                    letterSpacing: 'var(--font-letterSpacing)',
                    fontStyle: 'var(--font-style-italic)',
                },
                // Medium display
                '.display-md-semibolditalic': {
                    fontSize: 'var(--font-size-display-md)',
                    lineHeight: 'var(--line-height-display-md)',
                    letterSpacing: 'var(--font-letterSpacing)',
                    fontWeight: 'var(--font-weight-semibold)',
                    fontStyle: 'var(--font-style-italic)',
                },
                '.display-md-bolditalic': {
                    fontSize: 'var(--font-size-display-md)',
                    lineHeight: 'var(--line-height-display-md)',
                    letterSpacing: 'var(--font-letterSpacing)',
                    fontWeight: 'var(--font-weight-bold)',
                    fontStyle: 'var(--font-style-italic)',
                },
                '.display-md-mediumitalic': {
                    fontSize: 'var(--font-size-display-md)',
                    lineHeight: 'var(--line-height-display-md)',
                    letterSpacing: 'var(--font-letterSpacing)',
                    fontWeight: 'var(--font-weight-medium)',
                    fontStyle: 'var(--font-style-italic)',
                },
                '.display-md-regular': {
                    fontSize: 'var(--font-size-display-md)',
                    lineHeight: 'var(--line-height-display-md)',
                    letterSpacing: 'var(--font-letterSpacing)',
                    fontWeight: 'var(--font-weight-regular)',
                },
                '.display-md-semibold': {
                    fontSize: 'var(--font-size-display-md)',
                    lineHeight: 'var(--line-height-display-md)',
                    letterSpacing: 'var(--font-letterSpacing)',
                    fontWeight: 'var(--font-weight-semibold)',
                },
                '.display-md-bold': {
                    fontSize: 'var(--font-size-display-md)',
                    lineHeight: 'var(--line-height-display-md)',
                    letterSpacing: 'var(--font-letterSpacing)',
                    fontWeight: 'var(--font-weight-bold)',
                },
                '.display-md-medium': {
                    fontSize: 'var(--font-size-display-md)',
                    lineHeight: 'var(--line-height-display-md)',
                    letterSpacing: 'var(--font-letterSpacing)',
                    fontWeight: 'var(--font-weight-medium)',
                },
                '.display-md-italic': {
                    fontSize: 'var(--font-size-display-md)',
                    lineHeight: 'var(--line-height-display-md)',
                    letterSpacing: 'var(--font-letterSpacing)',
                    fontStyle: 'var(--font-style-italic)',
                },

                // Small display (sm)
                '.display-sm-semibolditalic': {
                    fontSize: 'var(--font-size-display-sm)',
                    lineHeight: 'var(--line-height-display-sm)',
                    letterSpacing: 'var(--font-letterSpacing)',
                    fontWeight: 'var(--font-weight-semibold)',
                    fontStyle: 'var(--font-style-italic)',
                },
                '.display-sm-bolditalic': {
                    fontSize: 'var(--font-size-display-sm)',
                    lineHeight: 'var(--line-height-display-sm)',
                    letterSpacing: 'var(--font-letterSpacing)',
                    fontWeight: 'var(--font-weight-bold)',
                    fontStyle: 'var(--font-style-italic)',
                },
                '.display-sm-mediumitalic': {
                    fontSize: 'var(--font-size-display-sm)',
                    lineHeight: 'var(--line-height-display-sm)',
                    letterSpacing: 'var(--font-letterSpacing)',
                    fontWeight: 'var(--font-weight-medium)',
                    fontStyle: 'var(--font-style-italic)',
                },
                '.display-sm-regular': {
                    fontSize: 'var(--font-size-display-sm)',
                    lineHeight: 'var(--line-height-display-sm)',
                    letterSpacing: 'var(--font-letterSpacing)',
                    fontWeight: 'var(--font-weight-regular)',
                },
                '.display-sm-semibold': {
                    fontSize: 'var(--font-size-display-sm)',
                    lineHeight: 'var(--line-height-display-sm)',
                    letterSpacing: 'var(--font-letterSpacing)',
                    fontWeight: 'var(--font-weight-semibold)',
                },
                '.display-sm-bold': {
                    fontSize: 'var(--font-size-display-sm)',
                    lineHeight: 'var(--line-height-display-sm)',
                    letterSpacing: 'var(--font-letterSpacing)',
                    fontWeight: 'var(--font-weight-bold)',
                },
                '.display-sm-medium': {
                    fontSize: 'var(--font-size-display-sm)',
                    lineHeight: 'var(--line-height-display-sm)',
                    letterSpacing: 'var(--font-letterSpacing)',
                    fontWeight: 'var(--font-weight-medium)',
                },
                '.display-sm-italic': {
                    fontSize: 'var(--font-size-display-sm)',
                    lineHeight: 'var(--line-height-display-sm)',
                    letterSpacing: 'var(--font-letterSpacing)',
                    fontStyle: 'var(--font-style-italic)',
                },

                // Subtitles    md
                '.subtitle-md': {
                    fontWeight: 'var(--font-weight-regular)',
                    fontSize: 'var(--font-size-subtitle-md)',
                    lineHeight: 'var(--line-height-subtitle-md)',
                },
                '.subtitle-md-semibolditalic': {
                    fontWeight: 'var(--font-weight-semibold)',
                    fontStyle: 'var(--font-style-italic)',
                },
                '.subtitle-md-bolditalic': {
                    fontWeight: 'var(--font-weight-bold)',
                    fontStyle: 'var(--font-style-italic)',
                },
                '.subtitle-md-mediumitalic': {
                    fontWeight: 'var(--font-weight-medium)',
                    fontStyle: 'var(--font-style-italic)',
                },
                '.subtitle-md-semibold': {
                    fontWeight: 'var(--font-weight-semibold)',
                },
                '.subtitle-md-bold': {
                    fontWeight: 'var(--font-weight-bold)',
                },
                '.subtitle-md-medium': {
                    fontWeight: 'var(--font-weight-medium)',
                },
                '.subtitle-md-italic': {
                    fontStyle: 'var(--font-style-italic)',
                },
                // Subtitle sm
                '.subtitle-sm': {
                    fontWeight: 'var(--font-weight-regular)',
                    fontSize: 'var(--font-size-subtitle-sm)',
                    lineHeight: 'var(--line-height-subtitle-sm)',
                },
                '.subtitle-sm-semibolditalic': {
                    fontWeight: 'var(--font-weight-semibold)',
                    fontStyle: 'var(--font-style-italic)',
                },
                '.subtitle-sm-bolditalic': {
                    fontWeight: 'var(--font-weight-bold)',
                    fontStyle: 'var(--font-style-italic)',
                },
                '.subtitle-sm-mediumitalic': {
                    fontWeight: 'var(--font-weight-medium)',
                    fontStyle: 'var(--font-style-italic)',
                },
                '.subtitle-sm-semibold': {
                    fontWeight: 'var(--font-weight-semibold)',
                },
                '.subtitle-sm-bold': {
                    fontWeight: 'var(--font-weight-bold)',
                },
                '.subtitle-sm-medium': {
                    fontWeight: 'var(--font-weight-medium)',
                },
                '.subtitle-sm-italic': {
                    fontStyle: 'var(--font-style-italic)',
                },

                // Body - xl
                '.body-xl': {
                    fontWeight: 'var(--font-weight-regular)',
                    fontSize: 'var(--font-size-body-xl)',
                    lineHeight: 'var(--line-height-body-xl)',
                    marginBottom: 'var(--para-spacing-xl)',
                },
                '.body-xl-italic': {
                    fontStyle: 'var(--font-style-italic)',
                    fontWeight: 'var(--font-weight-regular)',
                    fontSize: 'var(--font-size-body-xl)',
                    lineHeight: 'var(--line-height-body-xl)',
                    marginBottom: 'var(--para-spacing-xl)',
                },
                '.body-xl-medium': {
                    fontWeight: 'var(--font-weight-medium)',
                    fontSize: 'var(--font-size-body-xl)',
                    lineHeight: 'var(--line-height-body-xl)',
                    marginBottom: 'var(--para-spacing-xl)',
                },
                '.body-xl-mediumitalic': {
                    fontSize: 'var(--font-size-body-xl)',
                    lineHeight: 'var(--line-height-body-xl)',
                    fontWeight: 'var(--font-weight-medium)',
                    fontStyle: 'var(--font-style-italic)',
                    marginBottom: 'var(--para-spacing-xl)',
                },

                // Body Lg
                '.body-lg': {
                    fontWeight: 'var(--font-weight-regular)',
                    fontSize: 'var(--font-size-body-lg)',
                    lineHeight: 'var(--line-height-body-lg)',
                    marginBottom: 'var(--para-spacing-lg)',
                },
                '.body-lg-italic': {
                    fontStyle: 'var(--font-style-italic)',
                    fontWeight: 'var(--font-weight-regular)',
                    fontSize: 'var(--font-size-body-lg)',
                    lineHeight: 'var(--line-height-body-lg)',
                    marginBottom: 'var(--para-spacing-lg)',
                },
                '.body-lg-medium': {
                    fontWeight: 'var(--font-weight-medium)',
                    fontSize: 'var(--font-size-body-lg)',
                    lineHeight: 'var(--line-height-body-lg)',
                    marginBottom: 'var(--para-spacing-lg)',
                },
                '.body-lg-mediumitalic': {
                    fontSize: 'var(--font-size-body-lg)',
                    lineHeight: 'var(--line-height-body-lg)',
                    fontWeight: 'var(--font-weight-medium)',
                    fontStyle: 'var(--font-style-italic)',
                    marginBottom: 'var(--para-spacing-lg)',
                },

                // Body - md
                '.body-md': {
                    fontWeight: 'var(--font-weight-regular)',
                    fontSize: 'var(--font-size-body-md)',
                    lineHeight: 'var(--line-height-body-md)',
                    marginBottom: 'var(--para-spacing-md)',
                },
                '.body-md-italic': {
                    fontStyle: 'var(--font-style-italic)',
                    fontWeight: 'var(--font-weight-regular)',
                    fontSize: 'var(--font-size-body-md)',
                    lineHeight: 'var(--line-height-body-md)',
                    marginBottom: 'var(--para-spacing-md)',
                },
                '.body-md-medium': {
                    fontWeight: 'var(--font-weight-medium)',
                    fontSize: 'var(--font-size-body-md)',
                    lineHeight: 'var(--line-height-body-md)',
                    marginBottom: 'var(--para-spacing-md)',
                },
                '.body-md-mediumitalic': {
                    fontSize: 'var(--font-size-body-md)',
                    lineHeight: 'var(--line-height-body-md)',
                    fontWeight: 'var(--font-weight-medium)',
                    fontStyle: 'var(--font-style-italic)',
                    marginBottom: 'var(--para-spacing-md)',
                },

                // body - sm
                '.body-sm': {
                    fontWeight: 'var(--font-weight-regular)',
                    fontSize: 'var(--font-size-body-sm)',
                    lineHeight: 'var(--line-height-body-sm)',
                    marginBottom: 'var(--para-spacing-lg)',
                },
                '.body-sm-italic': {
                    fontStyle: 'var(--font-style-italic)',
                    fontWeight: 'var(--font-weight-regular)',
                    fontSize: 'var(--font-size-body-sm)',
                    lineHeight: 'var(--line-height-body-sm)',
                    marginBottom: 'var(--para-spacing-sm)',
                },
                '.body-sm-medium': {
                    fontWeight: 'var(--font-weight-medium)',
                    fontSize: 'var(--font-size-body-sm)',
                    lineHeight: 'var(--line-height-body-sm)',
                    marginBottom: 'var(--para-spacing-sm)',
                },
                '.body-sm-mediumitalic': {
                    fontSize: 'var(--font-size-body-sm)',
                    lineHeight: 'var(--line-height-body-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    fontStyle: 'var(--font-style-italic)',
                    marginBottom: 'var(--para-spacing-sm)',
                },

                // body - xs
                '.body-xs': {
                    fontWeight: 'var(--font-weight-regular)',
                    fontSize: 'var(--font-size-body-xs)',
                    lineHeight: 'var(--line-height-body-xs)',
                    marginBottom: 'var(--para-spacing-xs)',
                },
                '.body-xs-italic': {
                    fontStyle: 'var(--font-style-italic)',
                    fontWeight: 'var(--font-weight-regular)',
                    fontSize: 'var(--font-size-body-xs)',
                    lineHeight: 'var(--line-height-body-xs)',
                    marginBottom: 'var(--para-spacing-xs)',
                },
                '.body-xs-medium': {
                    fontWeight: 'var(--font-weight-medium)',
                    fontSize: 'var(--font-size-body-xs)',
                    lineHeight: 'var(--line-height-body-xs)',
                    marginBottom: 'var(--para-spacing-xs)',
                },
                '.body-xs-mediumitalic': {
                    fontSize: 'var(--font-size-body-xs)',
                    lineHeight: 'var(--line-height-body-xs)',
                    fontWeight: 'var(--font-weight-medium)',
                    fontStyle: 'var(--font-style-italic)',
                    marginBottom: 'var(--para-spacing-xs)',
                },

                '.label-lg': {
                    fontWeight: 'var(--font-weight-regular)',
                    fontSize: 'var(--font-size-label-lg)',
                    lineHeight: 'var(--line-height-label-lg)',
                    marginBottom: 'var(--para-spacing-label-lg)',
                },
                '.label-lg-medium': {
                    fontWeight: 'var(--font-weight-medium)',
                    fontSize: 'var(--font-size-label-lg)',
                    lineHeight: 'var(--line-height-label-lg)',
                    marginBottom: 'var(--para-spacing-label-lg)',
                },
                '.label-lg-semibold': {
                    fontWeight: 'var(--font-weight-semibold)',
                    fontSize: 'var(--font-size-label-lg)',
                    lineHeight: 'var(--line-height-label-lg)',
                    marginBottom: 'var(--para-spacing-label-lg)',
                },

                '.label-md': {
                    fontWeight: 'var(--font-weight-regular)',
                    fontSize: 'var(--font-size-label-md)',
                    lineHeight: 'var(--line-height-label-md)',
                    marginBottom: 'var(--para-spacing-label-md)',
                },
                '.label-md-medium': {
                    fontWeight: 'var(--font-weight-medium)',
                    fontSize: 'var(--font-size-label-md)',
                    lineHeight: 'var(--line-height-label-md)',
                    marginBottom: 'var(--para-spacing-label-md)',
                },
                '.label-md-semibold': {
                    fontWeight: 'var(--font-weight-semibold)',
                    fontSize: 'var(--font-size-label-md)',
                    lineHeight: 'var(--line-height-label-md)',
                    marginBottom: 'var(--para-spacing-label-md)',
                },

                '.label-sm': {
                    fontWeight: 'var(--font-weight-regular)',
                    fontSize: 'var(--font-size-label-sm)',
                    lineHeight: 'var(--line-height-label-sm)',
                    marginBottom: 'var(--para-spacing-label-sm)',
                },
                '.label-sm-medium': {
                    fontWeight: 'var(--font-weight-medium)',
                    fontSize: 'var(--font-size-label-sm)',
                    lineHeight: 'var(--line-height-label-sm)',
                    marginBottom: 'var(--para-spacing-label-sm)',
                },
                '.label-sm-semibold': {
                    fontWeight: 'var(--font-weight-semibold)',
                    fontSize: 'var(--font-size-label-sm)',
                    lineHeight: 'var(--line-height-label-sm)',
                    marginBottom: 'var(--para-spacing-label-sm)',
                },



            };
            addUtilities(newUtilities, ['responsive']);
        }
    ],
};



