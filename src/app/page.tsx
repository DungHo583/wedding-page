
import Albums from "./section-albums";
import Banner from "./section-banner";
// import Calendar from "./section-calendar";
// import Counter from "./section-counter";
import Event from "./section-event";
// import Information from "./section-info";
import HappyMoney from "./section-money";
import Share from "./section-share";


export default function Home() {
  return (
    <main className="">
      <Banner />
      <Share />
      {/* <Information /> */}
      <Event />
      <HappyMoney />
      <Albums />
    </main>
  )
}
