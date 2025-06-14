import { Allen } from "./Allen";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { JEE } from "./JEE";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App(){
  return <>
  <BrowserRouter>
    <Header className={"relative z-10"}/>
    <Routes>
      <Route path="/" element={<Allen className={"mb-10 z-0"} />} />
      <Route path="/JEE" element={<JEE />} />
    </Routes>
    <Footer className={''}/>
  </BrowserRouter>
  </>
}

export default App;