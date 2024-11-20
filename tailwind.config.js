/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        slswhite: '#F5F5F5',
        slsblue: '#1565C0',
        slslightblue: '#64B5F6',
        slsyellow: '#FFC107',
        slsdarkgreen: '#1B5E20',
        slsgreen: '#2E7D32',
        slslightgreen: '#A5D6A7',
        slsbrown: '#795548',
      },
    },
  },
  plugins: [],
};
