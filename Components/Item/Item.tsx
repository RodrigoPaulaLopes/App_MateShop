import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IProduto from '../../interfaces/Produto';

interface IParam {
  produto: IProduto;
  navigation: any
}

function Item({produto, navigation}: IParam) {
  return (
    <TouchableOpacity style={styles.card} key={produto.id} onPress={e => navigation.navigate("Card", {produto: produto as IProduto})}>
      <Image source={{uri: produto.imagem}} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{produto.nome}</Text>
        <Text style={styles.price}>R$ {produto.preco}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  details: {
    marginLeft: 10,
    display: "flex",
    justifyContent: "center"
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: 'green',
  },
});
export default Item;
