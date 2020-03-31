import {Dimensions, Platform, Appearance} from 'react-native';

const deviceSize = Dimensions.get('window'),
  theme = Appearance.getColorScheme();

let fontColor,
  surfaceColor,
  seperatorColor,
  searchBackColor,
  placeholderColor,
  valueNumCases,
  valueNumDeath,
  valueNumRecovered,
  statusBar;

valueNumCases = '#ff8f00';

if (theme === 'light') {
  valueNumRecovered = '#d32f2f';
  statusBar = 'dark-content';
  valueNumDeath = 'black';
  fontColor = 'black';
  surfaceColor = 'white';
  seperatorColor = '#eceff1';
  searchBackColor = '#eceff1';
  placeholderColor = 'gray';
} else {
  valueNumDeath = 'white';
  statusBar = 'light-content';
  valueNumRecovered = '#e53935';
  fontColor = 'white';
  surfaceColor = '#282830';
  seperatorColor = '#29434e';
  searchBackColor = '#37474f';
  placeholderColor = '#9ea7aa';
}

const styles = {
  valueNumCases,
  valueNumDeath,
  valueNumRecovered,
  statusBar,

  mainContainer: {
    flex: 1,
    backgroundColor: surfaceColor,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    container:
      Platform.OS === 'ios'
        ? {
            flex: 1,
            margin: 5,
            padding: 5,
            borderRadius: 5,
            backgroundColor: searchBackColor,
            flexDirection: 'row',
            alignItems: 'center',
          }
        : {
            flex: 1,
            margin: 5,
            paddingHorizontal: 5,
            borderRadius: 5,
            backgroundColor: searchBackColor,
            flexDirection: 'row',
            alignItems: 'center',
          },

    placeholderColor,

    inputStyle: {
      flex: 1,
      alignItems: 'center',
      border: '1px solid #dcdce6',
      borderRadius: 8,
      fontSize: 14,
      marginLeft: 10,
      color: fontColor,
    },
  },
  main: {
    seperator: {
      borderColor: seperatorColor,
      borderWidth: 1,
    },
    sortTitle: {
      fontSize: 15,
      marginLeft: 3,
      color: fontColor,
    },
    header: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
      borderBottomColor: seperatorColor,
      borderBottomWidth: 1,
      paddingVertical: 3,
    },
    noResult: {
      image: {
        width: deviceSize.width * 0.1,
        height: deviceSize.height * 0.1,
        resizeMode: 'contain',
        tintColor: 'gray',
      },
      title: {
        color: 'gray',
        textAlign: 'center',
      },
    },
    sort: {
      image: {
        width: deviceSize.width * 0.05,
        height: deviceSize.height * 0.05,
        resizeMode: 'contain',
      },
      title: {
        fontSize: 13,
        marginLeft: 3,
      },
    },
  },
  dataItem: {
    container: {
      marginTop: 8,
      padding: 8,
    },
    flag: {
      width: 32,
      height: 32,
    },
    topContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },
    countryName: {
      marginLeft: 5,
      fontSize: 20,
      fontWeight: 'bold',
      color: fontColor,
    },
    totalConf: {
      fontSize: 18,
      color: fontColor,
    },
    valueNum: {
      marginLeft: 5,
      fontSize: 16,
      fontWeight: 'bold',
      color: fontColor,
    },
    valueNumInfo: {
      fontSize: 14,
      fontStyle: 'italic',
      marginLeft: 5,
    },
    valueColor: {
      width: 10,
      height: 10,
      borderRadius: 20,
    },
    valueContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    valueBlock: {
      flexDirection: 'column',
    },
    values: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 5,
    },
    region: {
      marginLeft: 2,
      fontSize: 12,
      fontStyle: 'italic',
      color: fontColor,
    },
    updateTime: {
      fontSize: 12,
      marginLeft: 5,
      color: 'gray',
    },
  },
};

export default styles;
