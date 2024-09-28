/** @type {import('tailwindcss').Config} */
// tailwind.config.js
import { neutral, success, error, warning, brand } from "./color";

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
      }

    },
  },
  plugins: [],
};
