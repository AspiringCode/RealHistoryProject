import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Background from './Pages/Background.jsx';
import Decision from './Pages/Decision.jsx';
import ShadowWar from './Pages/ShadowWar.jsx';
import Sources from './Pages/Sources.jsx';
import ChainOfEvents from './Pages/ChainOfEvents.jsx';
import Operation from './Pages/Operation.jsx';
import SecretFortune from './Pages/SecretFortune.jsx';

import Navbar from './Components/shared/Navbar.jsx';
import { DifficultyProvider } from './context/DifficultyContext.jsx';

export default function App() {
  return (
    <DifficultyProvider>
      <div className="min-h-screen bg-midnight text-slate-200 selection:bg-gold-bright selection:text-midnight">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/background" element={<Background />} />
          <Route path="/decision" element={<Decision />} />
          <Route path="/shadowwar" element={<ShadowWar />} />
          <Route path="/chainofevents" element={<ChainOfEvents />} />
          <Route path="/sources" element={<Sources />} />
          <Route path="/operation" element={<Operation />} />
          <Route path="/secret" element={<SecretFortune />} />
        </Routes>
      </div>
    </DifficultyProvider>
  );
}
