import { LanguageProvider } from "./context/LanguageProvider"; 
import Navbar from "./components/Navbar";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
    return (
        <LanguageProvider> {/* Agora todos os componentes terão acesso ao contexto de idioma */}
            <Navbar />
            <About />
            <Project />
            <Contact />
            <Footer />
        </LanguageProvider>
    ); 
}
