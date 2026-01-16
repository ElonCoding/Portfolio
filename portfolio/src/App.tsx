import { Suspense } from 'react';
import ThreeBackground from './components/ThreeBackground';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
    return (
        <div className="min-h-screen bg-cyber-black text-white selection:bg-cyber-green selection:text-black scanlines">
            <Suspense fallback={<Loading />}>
                <ThreeBackground />
            </Suspense>

            <Navbar />

            <main className="relative z-10">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </main>
        </div>
    );
}

export default App;
