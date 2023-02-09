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
        'doubao':"url(/img/doubao.jpeg)"
      }
    },
  }
} as Options;

