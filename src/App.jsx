import { ThemeProvider } from "styled-components";
import Topbar from "./components/Topbar";
import styled from "styled-components";
import GetStartedCard from "./components/GetStartedCard";
import Numbers from "./components/Numbers";

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

const Cont = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const App = () => {
  return (
  <ThemeProvider theme={theme}>
    <Topbar />
    <Cont>
      <GetStartedCard />
      <Numbers />
    </Cont>
  </ThemeProvider>
    );
};

export default App;