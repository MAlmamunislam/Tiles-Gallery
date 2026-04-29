import Banar from "@/components/home/Banar";
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
    </div>
  );
}
