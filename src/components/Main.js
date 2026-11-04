import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Pricing from './Pricing';
function Main() {
  return (
    <>
      <main>
        <Services />
        <About />
        <Pricing />
        <Contact />
      </main>
    </>
  );
}
export default Main;
