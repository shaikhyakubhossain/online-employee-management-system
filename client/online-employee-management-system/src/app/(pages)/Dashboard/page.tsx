import HeroHeader from "@/components/Dashboard/HeroHeader/hero-header.component";
import HeroContent from "@/components/Dashboard/HeroContent/hero-content.component";
import SubHeaderContainer from "@/components/Dashboard/SubHeaderContainer/sub-header-container.component";

export default function Dashboard() {
  return (
    <div className="font-times">
      <HeroHeader greeting="Welcome" title="Hello" message="You can manage your things from here" showEmoji={true} showCurrentUserName={true}/>
      <HeroHeader greeting="Congratulations" title="Employee of the Month" message="Prof. Sekharesh Barik" showEmoji={false} showCurrentUserName={false} swapTextLocation={true}/>
      <SubHeaderContainer />
      <HeroContent />
    </div>
  );
}