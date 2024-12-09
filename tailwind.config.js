/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',  // Include HTML files (if any)
    './src/**/*.{js,jsx,ts,tsx}',  // Ensure this is correctly pointing to your JSX files
  ],
  mode: "jit",
  theme: {
    fontFamily: {
      // Define your primary fonts here for consistency
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      // Define custom breakpoints for better responsive design
      screens: {
        'sm': '640px', // Small screens (phones) - Set to 340px for mobile
        'md': '768px', // Medium screens (tablets)
        'lg': '1024px', // Large screens (desktops)
        'xl': '1280px', // Extra large screens
        '2xl': '1536px', // Large monitors and bigger screens
        '3xl': '1920px', // Ultra-wide displays
        // Custom breakpoints for your specific needs
        '1000px': '1050px',
        '1100px': '1110px',
        '800px': '800px',
        '1300px': '1300px',
        '400px': '400px', // Custom mobile breakpoint (400px)
      },
      colors: {
        // Optionally extend with custom colors for more design consistency
        primary: '#3490dc', // Blue
        secondary: '#ffed4a', // Yellow
        accent: '#38b2ac', // Teal
        neutral: '#2d3748', // Dark gray
      },
      spacing: {
        // You can extend spacing for custom gaps, padding, or margin values
        '18': '4.5rem',
        '36': '9rem',
      },
      typography: {
        // You can also add typography-related extensions if needed
        DEFAULT: {
          css: {
            color: '#4a5568',
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#63b3ed',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    // Add useful plugins here, such as typography, aspect ratio, forms, etc.
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
