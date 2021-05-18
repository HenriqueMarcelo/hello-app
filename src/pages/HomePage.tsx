import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  View,
  ActivityIndicator,
} from 'react-native';
import TableLine from '../components/TableLine';
import {RegisterProps} from '../props';
import RegisterService from '../services/RegisterService';
import {colors} from '../styles/colors';

interface Props {
  navigation: any;
}

const HomePage: React.FC<Props> = ({navigation}) => {
  const [registers, setRegisters] = useState<RegisterProps[]>([]);
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      RegisterService.all()
        .then(allRegisters => {
          setRegisters(allRegisters);
        })
        .finally(() => {
          setLoading(false);
        });
    }, []),
  );
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.background}>
        {loading ? (
          <ActivityIndicator size="large" color={colors.gray} />
        ) : (
          <>
            <Text style={[styles.h1, styles.mt16]}>Todos os registros:</Text>

            <TableLine textRight="Coisa" textLeft="Quantidade" dark />
            {registers.map(register => (
              <TableLine
                key={Math.random() + ''}
                textRight={register.thing}
                textLeft={register.number + ''}
                dark={false}
              />
            ))}

            <View style={styles.pb16} />
          </>
        )}
      </ScrollView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Create')}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: colors.primary,
    elevation: 3,
    borderRadius: 999,
    alignSelf: 'flex-start',
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 16,
    right: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 24,
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
  pb16: {
    paddingBottom: 16,
  },
});

export default HomePage;
