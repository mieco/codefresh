/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function VendingMachine() {
  return (
    <div class={tw`w-[1200px] mx-auto px-4 mt-4`}>
      <img class={tw`h-[740px] `} src="/img/machine.svg" alt="" />
    </div>
  );
}
