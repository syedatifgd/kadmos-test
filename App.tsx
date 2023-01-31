import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import RootStack from "./src/navigation/Rootstack";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./src/api";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  </QueryClientProvider>
);
export default App;
