import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      with: '100%',
      height: '100%',
      backgroundColor: '#efefef',
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
      backgroundColor: 'white',
      height: '10%',
      width: '95%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
    },
    title: {
      fontSize: 18,
      color: '#2f2f2f',
      fontWeight: '700',
    },
    body: {
      height: '70%',
      width: '100%',
    },
    card: {
      backgroundColor: '#fff',
      width: 60,
      marginTop: -20,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 60,
    },
    textCard: {
      color: 'white',
    },
    scroll: {
      padding: 10,
    },
    footer: {
      height: '10%',
      width: '100%',
      backgroundColor: '#efefef',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default styles