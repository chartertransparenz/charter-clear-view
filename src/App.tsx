import { BrowserRouter, Routes, Route } from "react-router-dom";

// Test with minimal Index replacement
const SimpleIndex = () => {
  return (
    <div>
      <h1>Yachtcharter Preisvergleich</h1>
      <p>Testing minimal index page</p>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SimpleIndex />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;