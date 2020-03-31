import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../utils/styles';

const SearchBar = props => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={styles.searchBar.container}>
        <TextInput
          style={styles.searchBar.inputStyle}
          placeholder="Digite o nome de um país"
          placeholderTextColor={styles.searchBar.placeholderColor}
          onChangeText={props.onSearch}
        />
        <Icon name="magnify" color="#999" size={24} />
      </View>
    </View>
  );
};

export {SearchBar};
