/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "../home/src/**/*.{js,jsx,ts,tsx}",
    "../statement/src/**/*.{js,jsx,ts,tsx}",
    "../nav-bar/src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    {
      pattern:
        /^(rounded|font|ms-\d+|bg-\[.*?\]|bg|text|p[tbxy]?|m[tbxyd]?|flex|grid|h|w|gap|justify|items|border|max|min)-?.*/,
    },
    {
      pattern: /^(sm:|md:|lg:|xl:|2xl:|hover:).*/,
    },
    "bg-[#004D61]",
    "bg-[#E4EDE3]",
    "text-[#84cc16]",
    "text-[25px]",
    "border-[#84cc16]",
    "md:text-left",
    "md:gap-10",
    "md:p-6",
    "md:ml-auto",
    "md:w-1/2",
    "md:justify-end",
    "md:px-10",
    "md:py-4",
    "lg:max-h-[500px]",
    "lg:min-w-[300px]",
    "lg:grid-cols-1",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
