import { Allen } from "./Allen";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { JEE } from "./JEE";

function App(){
  return <>
  <Header />
  <Allen className={"mb-10"} />
  <Footer className={'mt-3'}/>
  <JEE />
  </>
}

export default App;