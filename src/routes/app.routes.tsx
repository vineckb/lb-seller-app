import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Clients } from "../pages/Clients";

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Clients" component={Clients} />
  </AppStack.Navigator>
);

export default AppRoutes;
