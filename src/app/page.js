import Banar from "@/components/home/Banar";
import CardSection from "@/components/home/CardSection";
import Description from "@/components/home/Description";
import MarqueeView from "@/components/home/MarqueeView";


export default function Home() {
  return (
    <div>
      {/* banar section  */}

      <div>
        <Banar />
      </div>

      {/* Marquee */}

      <div>
        <MarqueeView />
      </div>
      {/* card  */}
      <div>
        <CardSection/>

      </div>
      <div>
        <Description/>
      </div>
    </div>
  );
}
