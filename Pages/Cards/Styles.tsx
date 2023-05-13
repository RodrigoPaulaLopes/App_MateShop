import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 300,
    height: 300,

    marginTop: 20,
  },
  header: {
    width: '100%',
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
  },
  body: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  card: {
    width: '80%',
    backgroundColor: '#efefef',
    padding: 10,
  },
  card_body: {
    display: 'flex',
    gap: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  text_flex: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  value: {
    fontSize: 16,
    fontWeight: '400',
    color: '#222',
  },
  value_total: {
    fontSize: 16,
    fontWeight: '400',
    color: 'green',
  },
  card_footer: {
    marginTop: 20,
    paddingBottom: 10,
    borderTopWidth: 5,
    borderTopColor: '#ddd',
    paddingLeft: 10,
    paddingRight: 10,

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '100%',
  },
  card_options: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
  },
  icon_edit: {
    backgroundColor: 'green',
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    width: 42,
    height: 42,
    borderRadius: 10,
  },
  icon_remove: {
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    width: 42,
    height: 42,
    borderRadius: 10,
  },
});

export default styles;
