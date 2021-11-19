import { ThemeProvider } from "styled-components";
import Topbar from "./components/Topbar";
import styled from "styled-components";
import GetStartedCard from "./components/GetStartedCard";
import Numbers from "./components/Numbers";
import Sections from "./components/Sections";
import Footer from "./components/Footer";

const theme = {
  media: {
    mobile: "375px",
    desktop: "1440px"
  },
  colors: {
    pink: "hsl(322, 100%, 66%)",
    lightPink: "hsl(321, 100%, 78%)",
    lightRed: "hsl(0, 100%, 63%)",
    darkCyan: "hsl(192, 100%, 9%)",
    paleBlue: "hsl(207, 100%, 98%)"
  },
  fonts: {
    headings: "'Poppins', sans-serif ",
    body: "'Open Sans', sans-serif"
  }
}

const MainCont = styled.div`
width: 100vw;
overflow-x: none;
`

const Cont = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const App = () => {
  return (
  <ThemeProvider theme={theme}>
    <MainCont>
    <Topbar />
    <Cont>
      <GetStartedCard />
      <Numbers />
    </Cont>
    <Sections />
    <Footer />
    </MainCont>
  </ThemeProvider>
    );
};

export default App;