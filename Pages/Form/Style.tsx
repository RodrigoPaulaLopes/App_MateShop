import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    gap: 20,
  },
 
  title: {
    fontSize: 18
  },
  form_control: {
    width: '90%',
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  icons: {
    backgroundColor: "#efefef"
  },
  input: {
    width: '90%',
    borderRadius: 10,
    backgroundColor: "#efefef"
  },
  card_button: {
    backgroundColor: "white",
    width: "90%"
  },
  button: {
    height: 50,
    width: "100%",
    backgroundColor: "purple",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  textButton: {
    fontSize: 18,
    fontWeight: "700",
    color: "white"
  }
});

export default styles;
