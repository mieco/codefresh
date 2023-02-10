import { Options } from "$fresh/plugins/twind.ts";
import * as colors from "twind/colors";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      colors,
      minHeight: {
        vh: "100vh",
        "1/2": "50%",
      },
      backgroundImage: {
        doubao: "url(/img/doubao.jpeg)",
      },
      animation: {
        "mini-bounce": "mini-bounce 1s infinite",
      },
      keyframes: {
        "mini-bounce": {
          "0%, 100%": {
            transform: "translateY(-10%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(10%)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      }
    },
  },
} as Options;
