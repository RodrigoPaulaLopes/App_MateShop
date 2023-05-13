import { View, TouchableOpacity, Text } from "react-native";


export default function Teste({navigation}: any) {
    return (
        <View>
            <TouchableOpacity onPress={e => navigation.navigate("Form")}>
                <Text>ir para proxima pagina</Text>
            </TouchableOpacity>
        </View>
    )
}