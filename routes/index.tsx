/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Head } from "$fresh/src/runtime/head.ts";

import Counter from "../islands/Counter.tsx";
import Header from "../components/Header.tsx";
import VendingMachine from "../components/VendingMachine.tsx";

console.log(tw);
export default function Home() {
  return (
    <div class={tw`mx-auto bg-gray-900 min-h-vh`}>
      <Head>
        <link rel="stylesheet" href="/default.css" />
      </Head>
      <div class={tw`p-4 mx-auto container w-[1000px]`}>
        <Header title="Inter Order System" />
        <VendingMachine />
      </div>
    </div>
  );
}
