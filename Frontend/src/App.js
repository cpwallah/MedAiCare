import Services from "./components/Services";
import Featured from "./components/Featured";
import TopNav from "./components/TopNav";
import Footer from "./components/footer";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="App " >
      <TopNav/>
      <Featured/>
      <Services/>
      <Pricing/>
      <Footer/>
    </div>
  );
}

export default App;
