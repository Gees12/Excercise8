import Search from "./Search";
import CardInfo from "./CardInfo/CardInfo";

export default function Home() {
  return (
    <section className="p-6 text-center">
      <h2 className="text-2xl font-semibold mb-4">Welcome to My Apps</h2>
      <Search />
      <CardInfo />
    </section>
  );
}
