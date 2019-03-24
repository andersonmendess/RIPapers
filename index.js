import { AppRegistry } from "react-native";
import { createAppContainer } from "react-navigation";
import Navigation from "./src/components/Navigation";
import { name as appName } from "./app.json";

const App = createAppContainer(Navigation);

AppRegistry.registerComponent(appName, () => App);