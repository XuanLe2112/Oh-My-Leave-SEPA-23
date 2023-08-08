import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import CameraPage from "../screens/CameraPage";
import CameraTakingPicture from "../screens/CameraTakingPicture";
import ConfirmPicture from "../screens/ConfirmPicture";
import Upload from "../screens/Upload";
import HomePage from '../screens/HomePage';
import Result from '../screens/Result';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CameraPage" component={CameraPage} options={{ headerShown: false }} />
        <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name="CameraTakingPicture" component={CameraTakingPicture} options={{ headerShown: false }}/>
        <Stack.Screen name="ConfirmPicture" component={ConfirmPicture} options={{ headerShown: false }}/>
        <Stack.Screen name="Upload" component={Upload} options={{ headerShown: false}}/>
        <Stack.Screen name="Result" component={Result} options={{ headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
