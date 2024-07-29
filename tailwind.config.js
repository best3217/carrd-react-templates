module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "72-main":
          "url('data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%220%200%20512%20512%22%20width%3D%22512%22%20height%3D%22512%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%3Cfilter%20id%3D%22noise%22%3E%20%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.875%22%20result%3D%22noise%22%20%2F%3E%20%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.23828125%200%22%20%2F%3E%20%3C%2Ffilter%3E%20%3Crect%20filter%3D%22url%28%23noise%29%22%20x%3D%220%22%20y%3D%220%22%20width%3D%22512%22%20height%3D%22512%22%20fill%3D%22transparent%22%20opacity%3D%221%22%20%2F%3E%3C%2Fsvg%3E'), linear-gradient(45deg, rgba(145,181,201,0.412) 0%, rgba(166,185,255,0.31) 100%), url('https://61816ab53696835d.demo.carrd.co/assets/images/bg.jpg?v=7496a20c')",
        "main-104":
          "linear-gradient(to top, rgba(34,30,63,0.839), rgba(34,30,63,0.839)), url('https://res.cloudinary.com/ddefgw6lg/image/upload/v1721960663/svg_fp2qfm.svg')",
        "gradient-instagram":
          "linear-gradient(45deg, #1905FF 0%, rgba(255,5,155,0.008) 100%)",
        "gradient-snapchat":
          "linear-gradient(45deg, #FF3205 0%, rgba(175,255,5,0.008) 100%)",
        "gradient-twitter":
          "linear-gradient(45deg, #9105FF 0%, rgba(5,165,255,0.008) 100%)",
      },
      backgroundSize: {
        "72-main-size": "512px, cover, cover",
        "main-size-104": "512px, cover, cover",
      },
      fontFamily: {
        arial: ["Arial", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        "source-sans-pro": ["Source Sans Pro", "sans-serif"],
        karla: ["Karla", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      width: {
        "70-title": "calc(100% + 0.5rem)",
        "70-subtitle": "calc(100% + 0.25rem)",
        "70-description": "calc(100% + 0.025rem)",
        "70-item": "calc(50% + 4rem)",
        "70-right-inner": "calc(100% + 4rem + 4rem + 0.4725px)",
        "70-right-inner-sm": "calc(100% + 4rem + 0.4725px)",
        "70-right-inner-xs": "calc(100% + 3rem + 0.4725px)",
        "104-social-item-text": "calc(75% + 2rem)",
        "104-social-item-icon": "calc(25% + 2rem)",
      },
      height: {
        "70-right": "calc(100% + 12rem)",
      },
      lineHeight: {
        "70-btn": "calc(2.5rem - 2px)",
        "70-input": "calc(3rem - 2px)",
        "70-textarea": "calc(2.5rem - 2px)",
      },
      boxShadow: {
        "70-input": "0 0 0 1px #1CCBD6",
      },
      backgroundPosition: {
        "main-position-104": "0% 0%, bottom",
      },
    },
  },
  plugins: [],
};
