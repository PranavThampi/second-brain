import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/ui/Navbar";
import { Home } from "./pages/Home";
import { Tweets } from "./pages/Tweets";
import { Videos } from "./pages/Videos";
import { Documents } from "./pages/Documents";
import { Links } from "./pages/Links";
import { Tags } from "./pages/Tags";

function App() {
  return (
    <main className="h-screen w-screen bg-black flex">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/links" element={<Links />} />
        <Route path="/tags" element={<Tags />} />
      </Routes>
    </main>
  );
}

export default App;
