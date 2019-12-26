import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './login';
import Register from './Register';

const navigator = createStackNavigator(
    {
        login: {screen: Login,
                    navigationOptions: {
                        header: null,
                        tabBarVisible: true ,
                    }
                },
        register: Register,
    },
    {
        initialRouteName: 'login',
    },
)

export default createAppContainer(navigator)