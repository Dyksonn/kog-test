import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import { SignIn } from '@screens/SignIn';
import { Home } from '@screens/Home';

type AppRoutes = {
    signIn: undefined;
    Home: undefined;
}

export type AuthNavigationRoutesProps = NativeStackNavigationProp<AppRoutes>

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();

export function AppRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen 
                name="signIn"
                component={SignIn}
            />
            <Screen 
                name="Home"
                component={Home}
            />
        </Navigator>
    );
}