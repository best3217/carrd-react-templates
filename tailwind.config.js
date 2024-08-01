module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "72-main":
          "url('data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%220%200%20512%20512%22%20width%3D%22512%22%20height%3D%22512%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%3Cfilter%20id%3D%22noise%22%3E%20%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.875%22%20result%3D%22noise%22%20%2F%3E%20%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.23828125%200%22%20%2F%3E%20%3C%2Ffilter%3E%20%3Crect%20filter%3D%22url%28%23noise%29%22%20x%3D%220%22%20y%3D%220%22%20width%3D%22512%22%20height%3D%22512%22%20fill%3D%22transparent%22%20opacity%3D%221%22%20%2F%3E%3C%2Fsvg%3E'), linear-gradient(45deg, rgba(145,181,201,0.412) 0%, rgba(166,185,255,0.31) 100%), url('./assets/template-72/cover.jpg')",
        "184-main":
          "url('data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%220%200%20512%20512%22%20width%3D%22512%22%20height%3D%22512%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%3Cfilter%20id%3D%22noise%22%3E%20%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.875%22%20result%3D%22noise%22%20%2F%3E%20%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.23828125%200%22%20%2F%3E%20%3C%2Ffilter%3E%20%3Crect%20filter%3D%22url%28%23noise%29%22%20x%3D%220%22%20y%3D%220%22%20width%3D%22512%22%20height%3D%22512%22%20fill%3D%22transparent%22%20opacity%3D%221%22%20%2F%3E%3C%2Fsvg%3E'), linear-gradient(0deg, rgba(0,0,0,0.749) 0%, transparent 69%), url('./assets/template-184/cover.jpg')",
        "184-main-lg":
          "url('data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%220%200%20512%20512%22%20width%3D%22512%22%20height%3D%22512%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%3Cfilter%20id%3D%22noise%22%3E%20%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.875%22%20result%3D%22noise%22%20%2F%3E%20%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.23828125%200%22%20%2F%3E%20%3C%2Ffilter%3E%20%3Crect%20filter%3D%22url%28%23noise%29%22%20x%3D%220%22%20y%3D%220%22%20width%3D%22512%22%20height%3D%22512%22%20fill%3D%22transparent%22%20opacity%3D%221%22%20%2F%3E%3C%2Fsvg%3E'), linear-gradient(0deg, rgba(0,0,0,0) 0%, transparent 69%), url('./assets/template-184/cover.jpg')",
        "main-104":
          "linear-gradient(to top, rgba(34,30,63,0.839), rgba(34,30,63,0.839)), url('./assets/template-104/cover.svg')",
        "main-230":
          "url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%20width%3D%22512%22%20height%3D%22512%22%20preserveAspectRatio%3D%22none%22%3E%20%3Cpath%20fill%3D%22rgba(255,255,255,0.051)%22%20d%3D%22M338%2C366.7l-0.1%2C0.5l-0.1%2C0.5c0%2C0.3%2C0%2C0.6-0.1%2C0.9l0.9%2C1c0.1-0.5%2C0.1-1%2C0.2-1.4l0.1-0.7v-0.1l0.1-0.5l0.4-2.1l-1-0.2%20L338%2C366.7z%20M344%2C367.8l-0.1%2C0.7c0%2C0.2-0.1%2C0.3-0.1%2C0.5l-0.3%2C1.8c-0.3%2C1.2-0.4%2C2.4-0.6%2C3.6l0.9%2C1c0.2-1.4%2C0.3-2.8%2C0.6-4.1l0.4-2.1%20c0-0.2%2C0.1-0.3%2C0.1-0.5l0.1-0.7l0.4-2.1l-1-0.2L344%2C367.8z%20M349.9%2C369l-0.2%2C0.9c-0.1%2C0.3-0.1%2C0.5-0.2%2C0.8l-0.5%2C3.2%20c-0.4%2C2-0.6%2C4.2-1%2C6.3l0.9%2C1l0.5-3.4c0.1-1.1%2C0.3-2.3%2C0.5-3.4l0.6-3.4c0-0.3%2C0.1-0.6%2C0.2-0.9l0.2-0.9l0.4-2l-1-0.2L349.9%2C369z%20M355.6%2C370.2l-0.2%2C1.1c-0.1%2C0.4-0.1%2C0.8-0.2%2C1.1l-0.8%2C4.6l-0.4%2C2.3l-0.3%2C2.3l-0.5%2C4.5l0.9%2C1l0.6-4.8l0.3-2.4l0.4-2.4l0.8-4.8%20c0.1-0.4%2C0.1-0.8%2C0.2-1.2l0.2-1.1l0.4-1.9l-1-0.2L355.6%2C370.2z%20M361.7%2C371.4l-0.3%2C1.3c-0.1%2C0.5-0.2%2C1-0.3%2C1.5l-0.9%2C6%20c-0.3%2C2-0.6%2C4-0.9%2C6l-0.8%2C5.8l0.9%2C1l0.8-6.2c0.3-2.1%2C0.6-4.1%2C0.9-6.2l1-6.2c0.1-0.5%2C0.2-1%2C0.3-1.5l0.3-1.3l0.4-1.9l-1-0.2%20L361.7%2C371.4z%20M367.5%2C372.5l-0.3%2C1.5c-0.1%2C0.6-0.2%2C1.2-0.3%2C1.8l-1.1%2C7.4c-0.8%2C4.9-1.4%2C9.8-2%2C14.7l0.9%2C1c0.7-5.1%2C1.3-10.1%2C2.1-15.2%20l1.1-7.6c0.1-0.6%2C0.2-1.3%2C0.3-1.9l0.3-1.5l0.4-1.8l-1-0.2L367.5%2C372.5z%20M407.7%2C61.9L407.7%2C61.9C407.7%2C61.9%2C407.7%2C61.9%2C407.7%2C61.9z%20M407.8%2C62c0%2C0-0.1%2C0-0.1-0.1L407.8%2C62l0.5%2C0.5c0.4%2C0.2%2C0.7%2C0.4%2C1%2C0.7l1.8-0.4c-0.5-0.5-1.1-0.8-1.5-1.2l-0.8-0.6l-0.1-0.1%20l-0.5-0.5l-2.2-1.9l-0.9%2C1l2.2%2C1.9L407.8%2C62z%20M413.6%2C55.8c0.2%2C0.1%2C0.3%2C0.3%2C0.5%2C0.5l1.9%2C1.6c1.2%2C1.2%2C2.5%2C2.2%2C3.8%2C3.2l1.8-0.4%20c-1.5-1.2-3.1-2.3-4.4-3.6l-2.2-1.9c-0.2-0.1-0.3-0.3-0.5-0.5l-0.8-0.6l-2.2-1.9l-0.9%2C1l2.2%2C1.9L413.6%2C55.8z%20M419.3%2C50%20c0.3%2C0.3%2C0.5%2C0.5%2C0.8%2C0.8l3.4%2C2.8c2.1%2C1.9%2C4.5%2C3.6%2C6.7%2C5.6l1.8-0.4l-3.6-3c-1.2-0.9-2.5-2-3.6-3l-3.6-3.1%20c-0.4-0.2-0.6-0.5-0.9-0.9l-0.9-0.9l-2.1-1.9l-0.9%2C1l2.1%2C1.9L419.3%2C50z%20M434.7%2C50.8l-2.5-2.2l-5.1-4.3c-0.4-0.4-0.9-0.7-1.3-1.1%20l-1.2-1l-2-1.8l-0.9%2C1l2%2C1.8l1.2%2C1c0.4%2C0.4%2C0.9%2C0.7%2C1.2%2C1l4.8%2C4.2l2.4%2C2.1l2.5%2C2l4.9%2C3.7l1.8-0.4l-5.2-4.1L434.7%2C50.8z%20M453.2%2C54.8l-6.7-5.3c-2.3-1.8-4.4-3.6-6.7-5.4l-6.6-5.5c-0.5-0.5-1-0.9-1.6-1.4l-1.3-1.3l-2-1.8l-0.9%2C1l2%2C1.8l1.3%2C1.3%20c0.5%2C0.5%2C1%2C0.9%2C1.6%2C1.4l6.4%2C5.3c2.1%2C1.8%2C4.3%2C3.5%2C6.4%2C5.3l6.3%2C5L453.2%2C54.8z%20M436.4%2C32.3c0.6%2C0.5%2C1.3%2C1.1%2C1.9%2C1.6l7.9%2C6.5%20c5.2%2C4.4%2C10.5%2C8.5%2C15.9%2C12.7l1.8-0.4c-5.5-4.4-11-8.6-16.4-13.1l-8.2-6.6c-0.6-0.5-1.4-1.1-2-1.7l-1.6-1.4l-1.8-1.7l-0.9%2C1%20l1.8%2C1.7L436.4%2C32.3z%20M266.1%2C382.2C266.1%2C382.3%2C266%2C382.3%2C266.1%2C382.2L266.1%2C382.2z%20M266.2%2C382.1l0.7-0.5c0.3-0.4%2C0.7-0.8%2C1.1-1.1%20l-0.1-2.3c-0.7%2C0.5-1.2%2C1.2-1.8%2C1.6l-0.9%2C0.8l-0.2%2C0.3c-0.1%2C0.1%2C0.1-0.1%2C0.1-0.1l-0.7%2C0.5l-2.8%2C2.3l1.1%2C1.3l2.8-2.3L266.2%2C382.1%20C266.2%2C382.1%2C266.2%2C382.2%2C266.2%2C382.1L266.2%2C382.1z%20M258.9%2C374.7l0.9-0.8c0.2-0.3%2C0.5-0.3%2C0.7-0.5l2.3-2c1.7-1.2%2C3.1-2.7%2C4.7-4%20l-0.1-2.3c-1.8%2C1.6-3.4%2C3.3-5.2%2C4.7l-2.8%2C2.3c-0.2%2C0.3-0.5%2C0.3-0.7%2C0.5l-0.9%2C0.8l-2.8%2C2.3l1.1%2C1.3L258.9%2C374.7z%20M267.2%2C354.3%20l-0.1-2.3l-4.3%2C3.9c-1.3%2C1.3-2.9%2C2.7-4.3%2C3.9l-4.5%2C3.8c-0.3%2C0.4-0.8%2C0.7-1.2%2C1l-1.2%2C1l-2.7%2C2.2l1.1%2C1.3l2.7-2.2l1.2-1%20c0.5-0.3%2C0.7-0.5%2C1.1-0.8l4.1-3.6C261.7%2C359.2%2C264.4%2C356.6%2C267.2%2C354.3z%20M247.9%2C357.8c0.6-0.4%2C1-0.9%2C1.5-1.2l6-5.1l3-2.6l2.9-2.7%20l5.5-5.3l-0.1-2.3l-6%2C5.6l-3%2C2.8l-3.1%2C2.7l-6.2%2C5.4c-0.6%2C0.4-1%2C0.9-1.6%2C1.3l-1.5%2C1.2l-2.6%2C2l1.1%2C1.3l2.6-2L247.9%2C357.8z%20M251.3%2C341.1c2.6-2.3%2C5.1-4.5%2C7.7-6.8l7.3-6.7l-0.1-2.3l-7.8%2C7.2c-2.7%2C2.4-5.2%2C4.7-7.9%2C7.1l-8%2C7c-0.7%2C0.5-1.3%2C1.1-2%2C1.6l-1.8%2C1.4%20l-2.6%2C2l1.1%2C1.3l2.6-2l1.8-1.4c0.7-0.5%2C1.3-1.1%2C2-1.6L251.3%2C341.1z%20M247.3%2C331.1c6.4-5.5%2C12.4-11.2%2C18.5-16.9l-0.1-2.3%20c-6.4%2C5.9-12.6%2C11.7-19.2%2C17.4l-9.7%2C8.7c-0.8%2C0.7-1.7%2C1.5-2.5%2C2.1l-2%2C1.6l-2.5%2C1.9l1.1%2C1.3l2.5-1.9l2-1.6c0.8-0.7%2C1.6-1.3%2C2.3-2%20L247.3%2C331.1z%20M265.5%2C137.8L265.5%2C137.8C265.6%2C137.8%2C265.6%2C137.8%2C265.5%2C137.8l0.4%2C0.4l1.3%2C1.4l0.7-0.6l-1.3-1.4l-0.3-0.3l0.1%2C0.1%20c0.1%2C0%2C0%2C0-0.1-0.1l-0.3-0.3c-0.2-0.2-0.4-0.3-0.6-0.5l-1.2%2C0.1c0.3%2C0.3%2C0.7%2C0.6%2C0.9%2C0.9L265.5%2C137.8z%20M265.7%2C137.9%20C265.7%2C137.9%2C265.7%2C137.9%2C265.7%2C137.9L265.7%2C137.9z%20M259.9%2C139.8l1.3%2C1.4c0.1%2C0.1%2C0.2%2C0.2%2C0.3%2C0.3l0.5%2C0.4l1.3%2C1.4l0.7-0.6%20l-1.3-1.4l-0.5-0.4c-0.1-0.1-0.2-0.2-0.3-0.3l-1.2-1.2c-0.7-0.9-1.5-1.6-2.3-2.3l-1.2%2C0.1C258.1%2C138.1%2C259.1%2C138.9%2C259.9%2C139.8z%20M254.7%2C142.1l2.2%2C2.2c0.2%2C0.2%2C0.4%2C0.4%2C0.5%2C0.6l0.5%2C0.6l1.2%2C1.3l0.7-0.6l-1.2-1.3l-0.5-0.6c-0.2-0.2-0.3-0.3-0.5-0.6l-2.1-2%20c-1.2-1.3-2.7-2.6-4.1-4l-1.2%2C0.1l2.2%2C2.2C253.3%2C140.6%2C254%2C141.4%2C254.7%2C142.1z%20M248%2C143l1.5%2C1.6l3.1%2C3.1c0.2%2C0.3%2C0.5%2C0.5%2C0.8%2C0.8%20l0.7%2C0.7l1.2%2C1.3l0.7-0.6l-1.2-1.3l-0.7-0.7c-0.2-0.3-0.5-0.5-0.7-0.7l-2.9-3l-1.5-1.5l-1.5-1.4l-3-2.7l-1.2%2C0.1l3.2%2C3L248%2C143z%20M244.3%2C147l4%2C4c0.3%2C0.3%2C0.6%2C0.7%2C0.9%2C1l0.8%2C0.9l1.2%2C1.3l0.7-0.6l-1.2-1.3l-0.8-0.9c-0.3-0.3-0.6-0.7-0.9-1l-3.9-3.8%20c-1.3-1.3-2.6-2.5-3.9-3.8l-3.8-3.6l-1.2%2C0.1l4.1%2C3.8C241.6%2C144.4%2C242.9%2C145.7%2C244.3%2C147z%20M244%2C154.3c0.4%2C0.4%2C0.8%2C0.8%2C1.2%2C1.2%20l0.9%2C1l1.1%2C1.2l0.7-0.6l-1.1-1.2l-0.9-1c-0.4-0.4-0.8-0.8-1.2-1.2l-4.8-4.7c-3.1-3.2-6.4-6.2-9.6-9.2l-1.2%2C0.1%20c3.3%2C3.2%2C6.7%2C6.3%2C10%2C9.5L244%2C154.3z%20M336%2C275.7l1.6%2C0.4v-31.4H336V275.7z%20M330%2C274.4l1.6%2C0.4v-30.1H330V274.4z%20M324%2C273l1.6%2C0.4%20v-28.7H324V273z%20M318%2C271.7l1.6%2C0.4v-27.4H318V271.7z%20M312%2C270.3l1.6%2C0.4v-26H312V270.3z%20M306%2C269l1.6%2C0.3v-24.6H306V269z%20M58.8%2C185.4l-28.5%2C12.1l0.3%2C1.6l28.9-12.3L58.8%2C185.4z%20M56.5%2C179.8l-27.3%2C11.6l0.3%2C1.6l27.7-11.8L56.5%2C179.8z%20M54.1%2C174.3%20l-26%2C11.1l0.3%2C1.6l26.4-11.2L54.1%2C174.3z%20M51.8%2C168.8l-24.8%2C10.6l0.3%2C1.6l25.2-10.7L51.8%2C168.8z%20M49.4%2C163.3l-23.5%2C10l0.3%2C1.6%20l23.9-10.2L49.4%2C163.3z%20M47.1%2C157.7l-22.3%2C9.5l0.4%2C1.6l22.6-9.6L47.1%2C157.7z%20M480.8%2C463.4l-28.5%2C12.1l0.3%2C1.6l28.9-12.3%20L480.8%2C463.4z%20M478.5%2C457.8l-27.3%2C11.6l0.3%2C1.6l27.7-11.8L478.5%2C457.8z%20M476.1%2C452.3l-26%2C11.1l0.3%2C1.6l26.4-11.2L476.1%2C452.3z%20M473.8%2C446.8l-24.8%2C10.6l0.3%2C1.6l25.2-10.7L473.8%2C446.8z%20M471.4%2C441.3l-23.5%2C10l0.3%2C1.6l23.9-10.2L471.4%2C441.3z%20M469.1%2C435.7%20l-22.3%2C9.5l0.4%2C1.6l22.6-9.6L469.1%2C435.7z%20M371.8%2C191.7c-2.7-2-5.4-4.1-8-6.4c-2.6-2.3-5.2-4.7-7.6-7.4l-2.9%2C2.7%20c2.6%2C2.8%2C5.3%2C5.3%2C8%2C7.7c2.7%2C2.3%2C5.5%2C4.5%2C8.2%2C6.6c5.6%2C4.1%2C11.2%2C7.7%2C16.9%2C11c11.3%2C6.7%2C22.8%2C12.3%2C34.4%2C17.5l1.6-3.7%20c-11.5-5.1-22.9-10.7-34.1-17.2C382.7%2C199.2%2C377.2%2C195.7%2C371.8%2C191.7z%20M375.3%2C186.9c-2.6-1.9-5.1-3.9-7.6-6.1%20c-2.5-2.2-4.9-4.5-7.2-6.9l-2.9%2C2.7c2.4%2C2.6%2C4.9%2C5%2C7.5%2C7.2c2.6%2C2.2%2C5.2%2C4.3%2C7.9%2C6.3c5.3%2C3.9%2C10.8%2C7.4%2C16.3%2C10.7%20c11.2%2C6.5%2C22.5%2C12%2C33.9%2C17.1l1.6-3.7c-11.3-5.1-22.6-10.5-33.5-16.9C385.9%2C194.1%2C380.5%2C190.7%2C375.3%2C186.9z%20M378.9%2C182%20c-2.5-1.8-4.9-3.8-7.2-5.8c-2.3-2-4.6-4.2-6.7-6.5l-2.9%2C2.7c2.2%2C2.4%2C4.6%2C4.6%2C7%2C6.8c2.4%2C2.1%2C4.9%2C4.1%2C7.5%2C6%20c5.1%2C3.8%2C10.4%2C7.1%2C15.8%2C10.3c10.8%2C6.4%2C22%2C11.9%2C33.3%2C16.9l1.6-3.7c-11.2-5-22.3-10.4-32.9-16.6C389.1%2C189%2C383.9%2C185.7%2C378.9%2C182z%20M382.5%2C177.2c-2.4-1.7-4.7-3.6-6.9-5.5c-2.2-1.9-4.3-3.9-6.2-6l-2.9%2C2.7c2%2C2.2%2C4.2%2C4.3%2C6.5%2C6.3c2.3%2C2%2C4.7%2C3.9%2C7.1%2C5.7%20c4.9%2C3.6%2C10%2C6.9%2C15.3%2C10c10.6%2C6.2%2C21.6%2C11.5%2C32.7%2C16.5l1.6-3.7c-11.1-4.9-22-10.2-32.3-16.3C392.2%2C183.9%2C387.2%2C180.7%2C382.5%2C177.2z%20M386.1%2C172.3c-2.3-1.7-4.4-3.4-6.5-5.2c-2-1.8-4-3.6-5.7-5.5l-2.9%2C2.7c1.9%2C2%2C3.9%2C3.9%2C6%2C5.8c2.2%2C1.8%2C4.4%2C3.7%2C6.7%2C5.4%20c4.7%2C3.4%2C9.6%2C6.6%2C14.8%2C9.6c10.2%2C6.2%2C21%2C11.4%2C32.1%2C16.3l1.6-3.7c-10.9-4.9-21.6-10.1-31.7-16C395.5%2C178.8%2C390.6%2C175.7%2C386.1%2C172.3z%20M389.6%2C167.6c-2.2-1.6-4.2-3.2-6.1-4.9c-1.9-1.7-3.6-3.3-5.2-5l-2.9%2C2.7c1.7%2C1.8%2C3.6%2C3.6%2C5.5%2C5.3c2%2C1.7%2C4.1%2C3.4%2C6.4%2C5.1%20c4.4%2C3.3%2C9.3%2C6.4%2C14.2%2C9.3c10%2C5.8%2C20.6%2C11%2C31.5%2C15.9l1.6-3.7c-10.8-4.8-21.3-9.9-31.1-15.7C398.6%2C173.7%2C393.9%2C170.7%2C389.6%2C167.6z%20M77.3%2C442.7c1.2-1.7%2C2.5-3.4%2C4-5c1.4-1.6%2C2.9-3.2%2C4.6-4.7l-1.7-1.8c-1.7%2C1.6-3.3%2C3.3-4.8%2C5c-1.4%2C1.7-2.8%2C3.4-4.1%2C5.1%20c-2.5%2C3.5-4.8%2C7-6.8%2C10.5c-4.1%2C7-7.6%2C14.2-10.8%2C21.4l2.3%2C1c3.2-7.1%2C6.6-14.2%2C10.6-21.2C72.6%2C449.4%2C74.8%2C446%2C77.3%2C442.7z%20M80.3%2C444.8c1.2-1.6%2C2.4-3.2%2C3.8-4.7c1.4-1.6%2C2.8-3%2C4.3-4.5l-1.7-1.8c-1.6%2C1.5-3.1%2C3-4.5%2C4.7s-2.7%2C3.2-3.9%2C4.9%20c-2.4%2C3.3-4.6%2C6.7-6.6%2C10.1c-4%2C7-7.4%2C14-10.6%2C21.1l2.3%2C1c3.2-7%2C6.5-14.1%2C10.4-20.8C75.8%2C451.4%2C77.9%2C448.1%2C80.3%2C444.8z%20M83.3%2C447.1%20c1.1-1.6%2C2.4-3%2C3.6-4.5c1.2-1.4%2C2.6-2.9%2C4-4.2l-1.7-1.8c-1.5%2C1.4-2.8%2C2.9-4.2%2C4.4c-1.3%2C1.5-2.5%2C3-3.7%2C4.7%20c-2.4%2C3.2-4.4%2C6.5-6.4%2C9.8c-4%2C6.7-7.4%2C13.7-10.4%2C20.7l2.3%2C1c3.1-7%2C6.4-13.9%2C10.3-20.5C79%2C453.4%2C81%2C450.2%2C83.3%2C447.1z%20M86.3%2C449.3%20c1.1-1.5%2C2.2-2.9%2C3.4-4.3c1.2-1.4%2C2.4-2.7%2C3.7-3.9l-1.7-1.8c-1.4%2C1.2-2.7%2C2.6-3.9%2C4c-1.2%2C1.4-2.4%2C2.9-3.5%2C4.4%20c-2.2%2C3-4.3%2C6.2-6.2%2C9.5c-3.8%2C6.6-7.1%2C13.4-10.2%2C20.3l2.3%2C1c3-6.9%2C6.3-13.7%2C10.1-20.1C82.2%2C455.3%2C84.1%2C452.2%2C86.3%2C449.3z%20M89.3%2C451.5c1.1-1.4%2C2.1-2.7%2C3.2-4c1.1-1.2%2C2.2-2.5%2C3.4-3.5l-1.7-1.8c-1.2%2C1.2-2.4%2C2.4-3.6%2C3.7c-1.1%2C1.4-2.3%2C2.7-3.3%2C4.2%20c-2.1%2C2.9-4.1%2C6-5.9%2C9.2c-3.8%2C6.3-7%2C13.1-10.1%2C20l2.3%2C1c3-6.8%2C6.2-13.4%2C9.9-19.7C85.3%2C457.4%2C87.2%2C454.3%2C89.3%2C451.5z%20M93.4%2C448.3%20c-1.1%2C1.2-2.1%2C2.6-3.2%2C4c-2%2C2.7-4%2C5.8-5.8%2C8.8c-3.6%2C6.2-6.8%2C12.8-9.8%2C19.6l2.3%2C1c3-6.7%2C6.1-13.2%2C9.7-19.3c1.8-3%2C3.7-6%2C5.6-8.6%20c1-1.4%2C2-2.6%2C3-3.8c1.1-1.2%2C2-2.2%2C3.1-3.2l-1.7-1.8C95.6%2C445.9%2C94.5%2C447.1%2C93.4%2C448.3z%20M49.4%2C315.2l2.3-2.2l-0.6-0.6l-2.2%2C2.2%20l-2.4%2C2.2l-2.3%2C2.2l-2.5%2C2.2l0.6%2C0.6l2.4-2.1l2.4-2.2L49.4%2C315.2z%20M53.6%2C319.6l2.4-2.4l-0.6-0.6L53%2C319l-2.4%2C2.2l-2.4%2C2.3%20l-2.5%2C2.2l0.6%2C0.6l2.5-2.2l2.4-2.3L53.6%2C319.6z%20M57.9%2C323.9l2.4-2.4l-0.6-0.6l-2.4%2C2.4l-2.5%2C2.3l-2.5%2C2.3l-2.6%2C2.3l0.6%2C0.6%20l2.6-2.3l2.5-2.3C56.2%2C325.4%2C57.1%2C324.7%2C57.9%2C323.9z%20M62%2C328.2l2.5-2.5l-0.6-0.6l-2.5%2C2.4c-0.8%2C0.8-1.7%2C1.6-2.5%2C2.4l-2.5%2C2.4%20l-2.7%2C2.4l0.6%2C0.6l2.6-2.3l2.6-2.4C60.3%2C329.7%2C61.2%2C328.9%2C62%2C328.2z%20M60.9%2C337.3l2.6-2.4c0.9-0.8%2C1.8-1.6%2C2.6-2.5l2.6-2.5%20l-0.6-0.6l-2.5%2C2.5c-0.9%2C0.8-1.7%2C1.6-2.6%2C2.4l-2.6%2C2.4l-2.8%2C2.5l0.6%2C0.6L60.9%2C337.3z%20M64.3%2C341.2l-2.7%2C2.4l0.6%2C0.6l2.7-2.4%20l2.7-2.5c0.9-0.8%2C1.8-1.7%2C2.7-2.5l2.6-2.6l-0.6-0.6l-2.6%2C2.6c-0.9%2C0.8-1.8%2C1.7-2.7%2C2.5L64.3%2C341.2z%20M327.1%2C18.5l2.3-2.3l2.3-2.2%20l-0.6-0.6l-2.2%2C2.2l-2.4%2C2.2l-2.3%2C2.2l-2.5%2C2.2l0.6%2C0.6l2.4-2.1L327.1%2C18.5z%20M333.6%2C20.6l2.4-2.4l-0.6-0.6L333%2C20l-2.4%2C2.2%20l-2.4%2C2.3l-2.5%2C2.2l0.6%2C0.6l2.5-2.2l2.4-2.3L333.6%2C20.6z%20M337.9%2C24.9l2.4-2.4l-0.6-0.6l-2.4%2C2.4l-2.5%2C2.3l-2.5%2C2.3l-2.6%2C2.3%20l0.6%2C0.6l2.6-2.3l2.5-2.3C336.2%2C26.4%2C337.1%2C25.7%2C337.9%2C24.9z%20M339.5%2C31.5c0.8-0.8%2C1.7-1.6%2C2.5-2.4l2.5-2.5l-0.6-0.6l-2.5%2C2.4%20c-0.8%2C0.8-1.7%2C1.6-2.5%2C2.4l-2.5%2C2.4l-2.7%2C2.4l0.6%2C0.6l2.6-2.3L339.5%2C31.5z%20M346.1%2C33.4l2.6-2.5l-0.6-0.6l-2.5%2C2.5%20c-0.9%2C0.8-1.7%2C1.6-2.6%2C2.4l-2.6%2C2.4l-2.8%2C2.5l0.6%2C0.6l2.7-2.4l2.6-2.4C344.4%2C35.1%2C345.3%2C34.3%2C346.1%2C33.4z%20M349.7%2C37.2%20c-0.9%2C0.8-1.8%2C1.7-2.7%2C2.5l-2.7%2C2.5l-2.7%2C2.4l0.6%2C0.6l2.7-2.4l2.7-2.5c0.9-0.8%2C1.8-1.7%2C2.7-2.5l2.6-2.6l-0.6-0.6L349.7%2C37.2z%20M264.3%2C459.4l-2-1.6l-2-1.7l-0.4%2C0.5l1.9%2C1.6l2%2C1.6l2%2C1.5l2%2C1.6l0.4-0.5l-1.9-1.5L264.3%2C459.4z%20M261.3%2C463.1l-2-1.6l-2-1.7%20l-0.4%2C0.5l2%2C1.7l2%2C1.6l2%2C1.6l2.1%2C1.6l0.4-0.5l-2.1-1.6L261.3%2C463.1z%20M258.3%2C466.8l-2.1-1.7l-2.1-1.8l-0.4%2C0.5l2.1%2C1.8l2.1%2C1.7%20c0.7%2C0.5%2C1.3%2C1.2%2C2.1%2C1.7l2.1%2C1.6l0.4-0.5l-2.1-1.6L258.3%2C466.8z%20M255.4%2C470.5l-2.1-1.7l-2.2-1.9l-0.4%2C0.5l2.1%2C1.8l2.1%2C1.8%20c0.7%2C0.5%2C1.4%2C1.2%2C2.1%2C1.7l2.2%2C1.7l0.4-0.5l-2.1-1.7C256.8%2C471.6%2C256.1%2C471%2C255.4%2C470.5z%20M252.4%2C474.1l-2.1-1.8l-2.2-1.9l-0.4%2C0.5%20l2.2%2C1.8l2.1%2C1.8c0.7%2C0.6%2C1.4%2C1.2%2C2.2%2C1.8l2.2%2C1.8l0.4-0.5l-2.2-1.7C253.8%2C475.3%2C253.1%2C474.8%2C252.4%2C474.1z%20M249.3%2C477.7l-2.2-1.8%20l-2.2-1.8l-0.4%2C0.5l2.2%2C1.8l2.2%2C1.8c0.7%2C0.6%2C1.5%2C1.2%2C2.2%2C1.8l2.3%2C1.8l0.4-0.5l-2.3-1.8C250.8%2C478.9%2C250%2C478.3%2C249.3%2C477.7z%20M131.9%2C29.5c5.5%2C7.2%2C11.1%2C14.4%2C16.4%2C21.8l1.3-1c-5.3-7.4-10.9-14.6-16.4-21.8L131.9%2C29.5z%20M127.2%2C33.2c5.5%2C7.2%2C11%2C14.3%2C16.3%2C21.7%20l1.3-1c-5.3-7.4-10.8-14.5-16.3-21.7L127.2%2C33.2z%20M122.4%2C36.8c5.4%2C7.2%2C11%2C14.3%2C16.2%2C21.6l1.3-1c-5.2-7.3-10.7-14.4-16.2-21.6%20L122.4%2C36.8z%20M117.7%2C40.5c5.4%2C7.1%2C10.9%2C14.2%2C16.1%2C21.4l1.3-1c-5.2-7.2-10.7-14.3-16.1-21.4L117.7%2C40.5z%20M112.9%2C44.2%20c5.4%2C7.1%2C10.8%2C14.1%2C16%2C21.3l1.3-1c-5.1-7.2-10.6-14.2-16-21.3L112.9%2C44.2z%20M108.2%2C47.8c5.3%2C7%2C10.8%2C14%2C15.9%2C21.2l1.3-1%20c-5.1-7.1-10.6-14.1-15.9-21.2L108.2%2C47.8z%20M179.5%2C223.8l-1.9%2C0.8c1.5%2C3.7%2C3.8%2C7.6%2C6.3%2C11.4c2.6%2C3.9%2C5.5%2C7.8%2C8.6%2C11.7l1.6-1.3%20c-3.1-3.8-5.9-7.7-8.5-11.5C183.2%2C231.1%2C181%2C227.3%2C179.5%2C223.8z%20M174%2C226.1l-1.9%2C0.8c1.7%2C4.2%2C4.2%2C8.3%2C6.9%2C12.4%20c2.7%2C4.1%2C5.7%2C8.1%2C8.9%2C12.1l1.6-1.3c-3.1-3.9-6.1-7.9-8.8-11.9C178.1%2C234.2%2C175.7%2C230.1%2C174%2C226.1z%20M168.5%2C228.5l-1.9%2C0.8%20c2%2C4.7%2C4.6%2C9.1%2C7.4%2C13.4s6%2C8.4%2C9.2%2C12.5l1.6-1.3c-3.2-4-6.3-8.1-9.1-12.4C172.9%2C237.3%2C170.4%2C232.9%2C168.5%2C228.5z%20M163%2C230.8%20l-1.9%2C0.8c2.2%2C5.2%2C5%2C9.9%2C7.9%2C14.4c3%2C4.5%2C6.2%2C8.8%2C9.5%2C12.9l1.6-1.3c-3.3-4.1-6.4-8.4-9.4-12.8C167.8%2C240.4%2C165.1%2C235.8%2C163%2C230.8z%20M157.4%2C233.1l-1.9%2C0.8c2.4%2C5.7%2C5.3%2C10.6%2C8.4%2C15.4c3.1%2C4.7%2C6.4%2C9.1%2C9.8%2C13.4l1.6-1.3c-3.4-4.2-6.6-8.6-9.7-13.2%20C162.6%2C243.5%2C159.7%2C238.6%2C157.4%2C233.1z%20M151.9%2C235.4l-1.9%2C0.8c2.6%2C6.2%2C5.7%2C11.4%2C9%2C16.3c3.2%2C4.9%2C6.7%2C9.4%2C10.1%2C13.8l1.6-1.3%20c-3.4-4.3-6.8-8.8-10-13.6C157.5%2C246.6%2C154.4%2C241.4%2C151.9%2C235.4z%20M455.1%2C341.6l0%2C1c2.3%2C0.1%2C4.6%2C0.3%2C6.8%2C0.6%20c2.1%2C0.3%2C4.2%2C0.8%2C5.9%2C1.3l0.3-0.9c-1.8-0.6-3.9-1.1-6-1.4C459.8%2C341.9%2C457.5%2C341.7%2C455.1%2C341.6z%20M469%2C340.9%20c-2-0.7-4.3-1.1-6.6-1.5c-2.3-0.3-4.7-0.5-7.1-0.7l0%2C1c2.4%2C0.1%2C4.7%2C0.3%2C7%2C0.6c2.2%2C0.3%2C4.5%2C0.8%2C6.4%2C1.4L469%2C340.9z%20M469.9%2C338.2%20c-2.3-0.8-4.7-1.2-7.1-1.6c-2.4-0.4-4.9-0.5-7.4-0.7l0%2C1c2.4%2C0.1%2C4.9%2C0.3%2C7.3%2C0.7c2.4%2C0.3%2C4.7%2C0.8%2C6.9%2C1.6L469.9%2C338.2z%20M470.8%2C335.5c-2.5-0.9-5.1-1.4-7.6-1.7c-2.5-0.4-5.1-0.6-7.6-0.7l0%2C1c2.5%2C0.1%2C5%2C0.4%2C7.5%2C0.7c2.5%2C0.4%2C5%2C0.9%2C7.4%2C1.7L470.8%2C335.5z%20M471.7%2C332.8c-2.8-1-5.4-1.5-8.1-1.9c-2.7-0.4-5.3-0.6-7.9-0.8l0%2C1c2.6%2C0.1%2C5.1%2C0.4%2C7.8%2C0.7c2.6%2C0.4%2C5.3%2C0.9%2C8%2C1.9L471.7%2C332.8z%20M455.9%2C328.4c2.6%2C0.2%2C5.3%2C0.4%2C8%2C0.7c2.7%2C0.4%2C5.5%2C0.9%2C8.5%2C1.9l0.3-0.9c-3-1-5.9-1.6-8.6-2c-2.8-0.4-5.5-0.6-8.1-0.8L455.9%2C328.4z%22%20%2F%3E%3C%2Fsvg%3E')",
        "230-inner-box":
          "linear-gradient(45deg, rgba(29,29,36,0.329) 0%, rgba(51,51,64,0.478) 100%)",
        "gradient-instagram":
          "linear-gradient(45deg, #1905FF 0%, rgba(255,5,155,0.008) 100%)",
        "gradient-snapchat":
          "linear-gradient(45deg, #FF3205 0%, rgba(175,255,5,0.008) 100%)",
        "gradient-twitter":
          "linear-gradient(45deg, #9105FF 0%, rgba(5,165,255,0.008) 100%)",
        "230-linkedin":
          "linear-gradient(206deg, #357CE8 0%, rgba(62,186,230,0.008) 100%)",
        "230-discord":
          "linear-gradient(206deg, #757EFF 0%, rgba(90,100,247,0.008) 100%)",
        "230-youtube":
          "linear-gradient(206deg, #FB576F 0%, rgba(250,41,65,0.008) 100%)",
        "230-twitter":
          "linear-gradient(206deg, rgba(71,71,89,0.478) 0%, rgba(51,51,64,0.004) 100%)",
        "203-main":
          "url('data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%220%200%20512%20512%22%20width%3D%22512%22%20height%3D%22512%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%3Cfilter%20id%3D%22noise%22%3E%20%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.875%22%20result%3D%22noise%22%20%2F%3E%20%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220.26953125%200%200%200%200%200%200.203125%200%200%200%200%200%200.27734375%200%200%200%200%200%200.4375%200%22%20%2F%3E%20%3C%2Ffilter%3E%20%3Crect%20filter%3D%22url%28%23noise%29%22%20x%3D%220%22%20y%3D%220%22%20width%3D%22512%22%20height%3D%22512%22%20fill%3D%22transparent%22%20opacity%3D%221%22%20%2F%3E%3C%2Fsvg%3E'), linear-gradient(to top, rgba(206,223,242,0.11), rgba(206,223,242,0.11)), url('./assets/template-203/cover.jpg')",
        "203-inner-box":
          "linear-gradient(135deg, #FFFFFF 0%, rgba(255,255,255,0.588) 76%)",
      },
      backgroundSize: {
        "72-main-size": "512px, cover, cover",
        "size-512-cover-cover": "512px, cover, cover",
        "184-main-size": "512px, cover, cover",
        "230-main-size": "748px",
        "main-size-104": "512px, cover, cover",
      },
      fontFamily: {
        arial: ["Arial", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        "source-sans-pro": ["Source Sans Pro", "sans-serif"],
        karla: ["Karla", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        vidaloka: ["Vidaloka", "sans-serif"],
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
        "184-left": "calc(60% + (4rem / 2))",
        "184-right": "calc(40% + (4rem / 2))",
        "230-left": "calc(60% + (2rem / 2))",
        "230-right": "calc(40% + (2rem / 2))",
        "230-subtitle": "calc(100% + 0.2625rem)",
        "230-subtitle-md": "calc(100% + 0.3rem)",
        "203-left": "calc(55% + (8rem / 2))",
        "203-right": "calc(45% + (8rem / 2))",
      },
      height: {
        "70-right": "calc(100% + 12rem)",
      },
      lineHeight: {
        "70-btn": "calc(2.5rem - 2px)",
        "70-input": "calc(3rem - 2px)",
        "70-textarea": "calc(2.5rem - 2px)",
      },
      margin: {
        "230-social-icon": "calc(-0.125em + 0rem)",
        "203-divider-md": "calc((8rem * -0.5) - 0.5px)",
        "203-divider": "calc((5rem * -0.5) - 0.5px)"
      },
      boxShadow: {
        "70-input": "0 0 0 1px #1CCBD6",
        "203-inner-box": "0rem 2.75rem 4.5rem 0rem rgba(0,0,0,0.2)",
      },
      backgroundPosition: {
        "main-position-104": "0% 0%, bottom",
        "position-230-inner-box": "0% 0%",
        "position-0-0": "0% 0%",
        "position-center-0-0-center": "center, 0% 0%, center",
      },
    },
  },
  plugins: [],
};
