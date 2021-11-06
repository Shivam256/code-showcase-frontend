import logo from "./logo.svg";
import "./App.css";

import ThemeConfig from "./theme/theme";
import { useTheme } from "@mui/material";
import Router from "./routes/routes.index";

function App() {
  const theme = useTheme();
  return (
    <ThemeConfig>
      <div className="App">
        <Router />
      </div>
    </ThemeConfig>
  );
}

export default App;
