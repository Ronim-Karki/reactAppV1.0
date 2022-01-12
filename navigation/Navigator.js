import SignUp from '../Components/SignUp';
import Home from '../Components/Home';
import HomeMenu from '../TabScreens/HomeMenu';
import Input from '../Components/Input';

const Navigator = createNativeStackNavigator(
  {
    Home: {
      screen: Home,
    },
    SignUpForm: {
      screen: SignUp,
    },
    Input: {
      screen: Input,
    },
    HomeMenu: {
      screen: HomeMenu,
    },
  },
  {
    initialRouteName: 'Home',
  }
);
export default createAppContainer(Navigator);
