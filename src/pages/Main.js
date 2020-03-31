import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import styles from '../utils/styles';
import {createList} from '../utils/functions';
import {SearchBar, DataItem} from '../components';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default Main = props => {
  const [loading, setLoading] = useState(true),
    [dataList, setDataList] = useState([]),
    [originalList, setOriginalList] = useState([]);

  const fetchData = async () => {
    setLoading(true);

    let statusList = await createList();

    setOriginalList(statusList);
    setDataList(statusList[0]);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  searchByName = text => {
    let filteredList = originalList[0].filter(item => {
      const itemData = item.country.toUpperCase();
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });

    setDataList(filteredList);
  };

  renderListHeader = () => {
    return (
      <>
        <StatusBar barStyle={styles.statusBar} />
        <View style={styles.main.header}>
          <Text style={styles.main.sortTitle}>Filtro:</Text>

          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => setDataList([...originalList[1].reverse()])}>
            <Icon name="heart-pulse" size={24} color={styles.valueNumCases} />

            <Text
              style={[styles.main.sort.title, {color: styles.valueNumCases}]}>
              Infectados
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => setDataList([...originalList[2].reverse()])}>
            <Icon name="heart-broken" size={24} color={styles.valueNumDeath} />
            <Text
              style={[styles.main.sort.title, {color: styles.valueNumDeath}]}>
              Mortos
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => setDataList([...originalList[3].reverse()])}>
            <Icon name="heart" size={24} color={styles.valueNumRecovered} />

            <Text
              style={[
                styles.main.sort.title,
                {color: styles.valueNumRecovered},
              ]}>
              Curados
            </Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  renderCountries = ({item}) => <DataItem item={item} />;

  renderSeperator = () => <View style={styles.main.seperator} />;

  renderEmpty = () => {
    return loading ? (
      <View style={{flex: 1}} />
    ) : (
      <View style={styles.center}>
        <Icon name="magnify-close" color="#999" size={104} />
        <Text
          style={
            styles.main.noResult.title
          }>{`Nenhum resultado corresponde à sua pesquisa.`}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <SearchBar onSearch={searchByName} />
      <FlatList
        data={dataList}
        refreshing={loading}
        onRefresh={fetchData}
        renderItem={renderCountries}
        ListEmptyComponent={renderEmpty}
        ListHeaderComponent={renderListHeader}
        contentContainerStyle={{flexGrow: 1}}
        ItemSeparatorComponent={renderSeperator}
        keyExtractor={(_, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

// #evdekal
