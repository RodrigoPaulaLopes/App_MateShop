import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import IProduto from '../../interfaces/Produto';
import styles from './Styles';
import Feather from 'react-native-vector-icons/Feather';

function Card({route, navigation}: any) {
  const {produto} = route.params;
  const [produtoDetalhe, setProdutoDetalhe] = useState<IProduto>({} as IProduto);

  useEffect(() => {
    setProdutoDetalhe(produto as IProduto);
  }, [produtoDetalhe]);
  function remove(id: number) {
    fetch(`http://192.168.2.101:8082/produtos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(dados => {});
    navigation.navigate('Home');
  }
  function findById(id: number) {
    fetch(`http://192.168.2.101:8082/produtos/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(dados => {
        const produto: IProduto = dados;
        navigation.navigate('Form', {produto: produto});
      });
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Produto de id: {produtoDetalhe.id}</Text>
      </View>
      <View style={styles.body}>
        <Image source={{uri: produtoDetalhe.imagem}} style={styles.image} />
        <View style={styles.card}>
          <View style={styles.card_body}>
            <View style={styles.text_flex}>
              <Text style={styles.label}>Produto:</Text>
              <Text style={styles.value}>{produtoDetalhe.nome}</Text>
            </View>
            <View style={styles.text_flex}>
              <Text style={styles.label}>Preço:</Text>
              <Text style={styles.value}>R${produtoDetalhe.preco}</Text>
            </View>
            <View style={styles.text_flex}>
              <Text style={styles.label}>Quantidade: </Text>
              <Text style={styles.value}>{produtoDetalhe.quantidade}</Text>
            </View>
          </View>
          <View style={styles.card_footer}>
            <Text style={styles.label}>Total:</Text>
            <Text style={styles.value_total}>
              R${produtoDetalhe.quantidade * produtoDetalhe.preco}
            </Text>
          </View>
          <View style={styles.card_options}>
            <TouchableOpacity
              style={styles.icon_edit}
              onPress={e => findById(Number(produtoDetalhe.id))}>
              <Feather name="edit" size={24} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.icon_remove}
              onPress={e => remove(Number(produtoDetalhe.id))}>
              <Feather name="trash" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Card;
