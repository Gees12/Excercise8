// import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* <Header /> */}
      <Header />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer text={"footernya disini "} />
    </div>
  );
}

export default App;
