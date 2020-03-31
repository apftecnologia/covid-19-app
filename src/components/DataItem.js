import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import {View, Text, Image} from 'react-native';
require('moment/locale/pt-br.js');
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

import styles from '../utils/styles';

export const DataItem = ({item}) => {
  return (
    <View style={styles.dataItem.container}>
      <View style={styles.dataItem.topContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={styles.dataItem.flag}
            source={{
              uri: `https://www.countryflags.io/${item.code}/shiny/64.png`,
            }}
          />

          <Text style={styles.dataItem.countryName}>{item.country.trim()}</Text>
          <Text style={styles.dataItem.region}>({item.region})</Text>
          <Text style={styles.dataItem.updateTime}>
            {moment(item.updateTime).fromNow()}
          </Text>
        </View>

        {/* <View style={{flexDirection: 'row'}}>
          <Text style={styles.dataItem.totalConf}>
            {numeral(item.cases.total).format('0,0')}
          </Text>
          {item.deaths.new ? (
            <Text
              style={[
                styles.dataItem.valueNumInfo,
                {color: '#e53935', fontStyle: 'normal'},
              ]}>
              ({item.deaths.new})
            </Text>
          ) : null}
        </View> */}
      </View>
      <View style={styles.dataItem.values}>
        <View
          style={[
            styles.dataItem.valueContainer,
            {justifyContent: 'flex-start'},
          ]}>
          <Icon name="heart-pulse" size={24} color={styles.valueNumCases} />
          <View style={styles.dataItem.valueBlock}>
            <Text
              style={[styles.dataItem.valueNum, {color: styles.valueNumCases}]}>
              {numeral(item.cases.total).format('0,0')}
            </Text>
            <Text
              style={[
                styles.dataItem.valueNumInfo,
                {color: styles.valueNumCases},
              ]}>
              (%{item.PercentConfirmed.toFixed(5)})
            </Text>
          </View>
        </View>

        <View style={[styles.dataItem.valueContainer, {flexDirection: 'row'}]}>
          <Icon name="heart-broken" size={24} color={styles.valueNumDeath} />
          <View style={styles.dataItem.valueBlock}>
            <Text
              style={[styles.dataItem.valueNum, {color: styles.valueNumDeath}]}>
              {numeral(item.deaths.total).format('0,0')}
            </Text>
            <Text
              style={[
                styles.dataItem.valueNumInfo,
                {color: styles.valueNumDeath},
              ]}>
              (%{item.PercentDeath.toFixed(2)})
            </Text>
            {item.deaths.new ? (
              <Text
                style={[
                  styles.dataItem.valueNumInfo,
                  {color: '#e53935', fontStyle: 'normal'},
                ]}>
                ({item.deaths.new})
              </Text>
            ) : null}
          </View>
        </View>

        <View style={styles.dataItem.valueContainer}>
          <Icon name="heart" size={24} color={styles.valueNumRecovered} />
          <View style={styles.dataItem.valueBlock}>
            <Text
              style={[
                styles.dataItem.valueNum,
                {color: styles.valueNumRecovered},
              ]}>
              {numeral(item.cases.recovered).format('0,0')}
            </Text>
            <Text
              style={[
                styles.dataItem.valueNumInfo,
                {color: styles.valueNumRecovered},
              ]}>
              (%{item.PercentRecovered.toFixed(2)})
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
