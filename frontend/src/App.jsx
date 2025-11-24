import { BrowserRouter, Routes, Route } from "react-router-dom";
import IaChat from "./pages/IaChat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IaChat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
