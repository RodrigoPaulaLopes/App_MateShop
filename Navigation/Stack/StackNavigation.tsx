import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../Pages/Home/Home';
import Form from '../../Pages/Form/Form';
import Teste from '../../Pages/Teste/Teste';
import { NavigationContainer } from '@react-navigation/native';
import IProduto from '../../interfaces/Produto';
import Card from '../../Pages/Cards/Card';

const Stack = createStackNavigator();

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{headerShown: false, title: "Home"}}/>
        <Stack.Screen name="Form" component={Form} options={{title: "Formulario de cadastro de produtos"}}/>
        <Stack.Screen name="Card" component={Card} options={{title: "Detalhes do produto"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
