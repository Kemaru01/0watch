import { createRoot } from "react-dom/client";

function App(): React.ReactNode {
  return (
    <>
      <h3>Hello world</h3>
    </>
  )
}

createRoot(document.getElementById("root")!)
  .render(<App />)
