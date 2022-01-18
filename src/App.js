import "./App.css";
import { Scrollbars } from "react-custom-scrollbars";

import ThemeConfig from "./theme/theme";
import { useTheme } from "@mui/material";
import Router from "./routes/routes.index";

import JwtProvider from "./providers/jwtProvider";

function App() {
  const theme = useTheme();
  return (
    <ThemeConfig>
      <JwtProvider>
        <div className="App" theme={theme}>
          
          <Router />
        </div>
      </JwtProvider>
    </ThemeConfig>
  );
}

export default App;
