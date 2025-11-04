import Logo from "./Logo";
import Generations from "./Generation/Generation";

export default function Header() {
  return (
    <header className="bg-blue-500 text-white p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-1">Test</h1>
      <Logo />
      <div className="mt-3 w-full max-w-md">
        <Generations />
      </div>
    </header>
  );
}
