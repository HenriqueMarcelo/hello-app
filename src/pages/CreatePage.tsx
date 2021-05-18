import React, {useCallback, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import RegisterService from '../services/RegisterService';
import {colors} from '../styles/colors';
import {Keyboard} from 'react-native';

interface Props {
  navigation: any;
}

const CreatePage: React.FC<Props> = ({navigation}) => {
  const [thing, setThing] = useState('');
  const [number, setNumber] = useState('');
  const handleClick = useCallback(() => {
    Keyboard.dismiss();
    let today = new Date().toISOString().slice(0, 10);
    RegisterService.save({
      thing,
      number: Number(number),
      day: today,
    }).then(() => {
      navigation.navigate('Home');
    });
  }, [thing, number, navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.background} keyboardShouldPersistTaps="handled">
        <Text style={styles.h1}>Novo Registro:</Text>
        <TextInput
          style={styles.input}
          onChangeText={v => setThing(v)}
          placeholder="Coisa"
        />
        <TextInput
          style={styles.input}
          onChangeText={v => setNumber(v)}
          keyboardType="number-pad"
          placeholder="Quantidade"
        />
        <TouchableOpacity style={styles.button} onPress={handleClick}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  background: {
    padding: 16,
  },
  text: {
    color: colors.black,
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.gray,
    marginBottom: 16,
  },
  mt16: {
    marginTop: 16,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.secondary,
    color: colors.gray,
    marginBottom: 8,
  },
  button: {
    backgroundColor: colors.primary,
    elevation: 1,
    borderRadius: 8,
    alignSelf: 'flex-end',
    padding: 12,
    paddingLeft: 24,
    paddingRight: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
  },
});

export default CreatePage;
