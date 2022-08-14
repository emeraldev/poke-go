import { ThemeProvider } from "react-native-rapi-ui";
import Navigator from "./src/utils/navigation/Navigator";

export default function App() {  
  const images = [
    require("./assets/icon.png"),
    require("./assets/splash.png"),
    require("./assets/login.png"),
    require("./assets/register.png"),
    require("./assets/forget.png"),
  ];


  return (
    <ThemeProvider images={images}>
      <Navigator />
    </ThemeProvider>
  );
}

