import {Text, View, TextInput} from 'react-native';
import styles from './Style';
import React, {useEffect, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native-gesture-handler';
import IProduto from '../../interfaces/Produto';

export default function Form({navigation, route}: any) {
  const [id, setId] = useState("")
  const [nome, setNome] = useState<string>('');
  const [preco, setPreco] = useState<string>('');
  const [quantidade, setQuantidade] = useState<string>('');
  const [imagem, setImagem] = useState<string>("https://e7.pngegg.com/pngimages/663/877/png-clipart-product-design-digital-marketing-business-steemit-brand-icon-rectangle-black.png");
  const [produtoEditar, setProdutoEditar] = useState<IProduto>({} as IProduto)
  const produto = route.params == undefined  ? undefined : route.params.produto 

  useEffect(() => {
    if(produto === undefined){
        setNome("")
        setPreco("")
        setQuantidade("")
        setImagem("")
    }else{
        setId(produto.id)
        setNome(produto.nome)
        setPreco(String(produto.preco))
        setQuantidade(String(produto.quantidade))
        setImagem(produto.imagem)
    }
  }, [])
  

  function enviarDados() {

    if(id === ""){
        const produto: IProduto = {
            nome: nome,
            preco: Number(preco),
            quantidade: Number(quantidade),
            imagem: imagem,
          };
          fetch('http://192.168.2.101:8082/produtos', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(produto),
          })
            .then(response => response.json())
            .then(json => {
              const produto: IProduto = json as IProduto
              const imagem = produto.imagem == "" ? "https://e7.pngegg.com/pngimages/663/877/png-clipart-product-design-digital-marketing-business-steemit-brand-icon-rectangle-black.png" : produto.imagem
              produto.imagem = imagem
              navigation.navigate("Card", {produto: produto})
            })
    }else{
        const produto: IProduto = {
            id: Number(id),
            nome: nome,
            preco: Number(preco),
            quantidade: Number(quantidade),
            imagem: imagem,
          };
          fetch('http://192.168.2.101:8082/produtos', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(produto),
          })
            .then(response => response.json())
            .then(json => {
              const produto: IProduto = json as IProduto
              const imagem = produto.imagem == "" ? "https://e7.pngegg.com/pngimages/663/877/png-clipart-product-design-digital-marketing-business-steemit-brand-icon-rectangle-black.png" : produto.imagem
              produto.imagem = imagem
              navigation.navigate("Card", {produto: produto})
            })
    }
    

  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Preencha com os dados do produto</Text>
      </View>
      <View style={styles.form_control}>
        <Feather name="tag" size={24} style={styles.icons} />
        <TextInput
          style={styles.input}
          onChangeText={text => setNome(text)}
          value={nome}
        />
      </View>
      <View style={styles.form_control}>
        <Feather name="dollar-sign" size={24} />
        <TextInput
          style={styles.input}
          onChangeText={text => setPreco(text)}
          value={preco}
        />
      </View>
      <View style={styles.form_control}>
        <Feather name="hash" size={24} />
        <TextInput
          style={styles.input}
          onChangeText={text => setQuantidade(text)}
          value={quantidade}
        />
      </View>
      <View style={styles.form_control}>
        <Feather name="image" size={24} />
        <TextInput
          style={styles.input}
          onChangeText={text => setImagem(text)}
          value={imagem}
        />
      </View>
      <View style={styles.card_button}>
        <TouchableOpacity style={styles.button} onPress={enviarDados}>
          <Text style={styles.textButton}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
