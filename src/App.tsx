import Background from "./components/Background/Background";
import { Analytics } from "@vercel/analytics/next";

function App() {
  return (
    <>
      <Background />
      <Analytics />
    </>
  );
}

export default App;
