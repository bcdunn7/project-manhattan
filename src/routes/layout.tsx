import { Slot, component$ } from "@builder.io/qwik";
import FrontierHelper from "~/components/FrontierHelper";
import Footer from "~/components/footer";
import Header from "~/components/header";

export default component$(() => {
  return (
    <div class='flex flex-col h-screen'>
      <Header />
      <FrontierHelper />
      <div class='flex grow'>
        <Slot />
      </div>
      <Footer />
    </div>
  )
})