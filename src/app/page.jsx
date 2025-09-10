import Banner from "@/components/Banner";

import Icons from "@/components/Icons";
import IconsButtons from "@/components/IconsButtons";
import MemberShip from "@/components/MemberShip";

import Popular from "@/components/Popular";
import Projects from "@/components/Projects";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <IconsButtons />
      <Slider />
      <Popular />
      <Icons />
      <Projects />
      <MemberShip />
    </div>
  );
}
