/** @jsx h */
import { h } from "preact";
import { tw, apply } from "@twind";

const gradientTextbg = apply`bg(gradient-to-br clip-text) text-transparent`;
const menuItem = apply`
  text(gray-400 lg hover:transparent) 
  mx-4 
  bg(hover:gradient-to-br hover:clip-text)
  hover:from-gray-100 
  hover:via-gray-300 
  hover:to-gray-100
`;

// group-hover:(bg(gradient-to-br clip-text) text-transparent font-bold from-gray-100 via-gray-300 to-gray-100)

export default function Header(props: { title: string }) {
  return (
    <div
      class={tw`h-[100px] w-full flex justify-between items-center`}
      // class={tw`h-[100px] flex justify-items-start items-center`}
    >
      <div class={tw`flex justify-items-start items-center h-full`}>

        <div class={tw`h-[85px] w-[85px] rounded-full bg(doubao cover right-top) bg-purple-500 p-4`}>
          
        </div>
        {/* <img
          src="/logo.svg"
          alt="the fresh logo: a sliced lemon dripping with juice"
          class={tw`h-[80px]`}
        /> */}
        <h1
          class={tw`text(4xl transparent) ml-6 ${gradientTextbg} from-purple-500 to-pink-500`}
        >
          {props.title}
        </h1>
      </div>
      <nav>
        <ul class={tw`flex items-center`}>
          <li>
            <a
              class={tw`${menuItem} ${gradientTextbg} font-bold from-gray-100 via-gray-300 to-gray-100`}
              href="/"
            >
              点菜
            </a>
          </li>
          <li>
            <a class={tw`${menuItem}`} href="/">
              菜品管理
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
