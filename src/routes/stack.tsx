import { createStackNavigator } from '@react-navigation/stack';
import Feed from "../screens/Feed";
import Info from "../screens/BusInfo";

type RootStackParamList = {
    feed: undefined;
    info: undefined;
  };
  
  const Stack = createStackNavigator<RootStackParamList>();
 
export default function StackRoutes(){
    return (
        
        <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen 
                    name="feed" 
                    component={Feed} 
                />
                <Stack.Screen 
                    name="info" 
                    component={Info} 
                />

                
            </Stack.Navigator>
    )
}