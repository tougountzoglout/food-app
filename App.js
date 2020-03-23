import 'react-native-gesture-handler';
import SearchScreen from './components/screens/SearchScreen';
import ResultScreen from './components/screens/ResultScreen';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'

const navigator = createStackNavigator(
  {
    Search:SearchScreen
    ,ShowResult: ResultScreen 
  },
  {
    initialRouteName:'Search',
    defaultNavigationOptions:{
      title:"Food App"
    }
  }
)

export default createAppContainer(navigator);