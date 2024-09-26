import HeroHeader from "@/components/Dashboard/HeroHeader/hero-header.component";
import HeroContent from "@/components/Dashboard/HeroContent/hero-content.component";
import SubHeaderContainer from "@/components/Dashboard/SubHeaderContainer/sub-header-container.component";

export default function Dashboard() {
  return (
    <div className="">
      <HeroHeader />
      <SubHeaderContainer />
      <HeroContent />
    </div>
  )
}