import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../styles/colors';

interface Props {
  textRight: string;
  textLeft: string;
  dark: boolean;
}

const index: React.FC<Props> = ({textRight, textLeft, dark}) => {
  return (
    <View style={dark ? styles.backgroundDark : styles.background}>
      <View style={styles.column}>
        <Text style={dark ? styles.textDark : styles.text}>{textRight}</Text>
      </View>
      <View style={styles.column}>
        <Text style={dark ? styles.textDark : styles.text}>{textLeft}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundDark: {
    flexDirection: 'row',
    borderBottomColor: colors.secondary,
    backgroundColor: colors.secondary,
    borderBottomWidth: 1,
  },
  background: {
    flexDirection: 'row',
    borderBottomColor: colors.secondary,
    borderBottomWidth: 1,
  },
  column: {
    flex: 1,
    padding: 12,
    paddingLeft: 24,
  },
  text: {
    color: colors.gray,
  },
  textDark: {
    color: colors.white,
  },
});

export default index;
