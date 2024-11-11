import Creeping from "@/components/common/Creeping";
import Hero from "@/components/common/Hero";
import Navigator from "@/components/common/Navigator";
import Products from "@/components/common/Products";
import RecentList from "@/components/common/RecentList";
import Recomends from "@/components/common/Recomends";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Recomends />
      <Navigator />
      <Creeping />
      <Products />
      <RecentList />
    </div>
  );
}
