import React, { useEffect, useState } from 'react';
import {View, Text, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import Item from '../../Components/Item/Item';
import Feather  from 'react-native-vector-icons/Feather';
import styles from './Styles';
import IProduto from '../../interfaces/Produto';


export default function Home({navigation}: any) {
    const [produtos, setProdutos] = useState<IProduto[]>([]);

    useEffect(() => {
      fetch('http://192.168.2.101:8082/produtos')
        .then(response => response.json())
        .then(json => setProdutos(json.content))
        .catch(error => console.error(error));
    }, [produtos]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Cadastro de Produtos</Text>
      </View>
      <View style={styles.body}>
        <ScrollView style={styles.scroll}>
          <FlatList
            data={produtos}
            renderItem={({item}) => <Item produto={item} navigation={navigation} />}
          />
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.card} onPress={e => navigation.navigate("Form")}>
          <Feather name="plus" size={60} color="purple" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
