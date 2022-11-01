import Features from "./components/Features";
import Footer from "./components/Footer";
import Frequntly from "./components/Frequently";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import PaymentSecurity from "./components/PaymentSecurity";
import Testimonial from "./components/Testimonial";
import WorkingTwo from "./components/WorkingTwo";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Features/>
      <Testimonial/>
      <PaymentSecurity/>
      <WorkingTwo/>
      <Frequntly/>
      <Footer/>
      

    </div>
  );
}
export default App;
