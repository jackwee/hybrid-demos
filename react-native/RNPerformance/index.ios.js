'use strict';

var ReactNative = require('react-native');
var React = require('react');
var SearchPage = require('./SearchPage');

var styles = ReactNative.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});



class RNPerformanceApp extends React.Component {
  render() {
    return (
      <ReactNative.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'RNPerfromance',
          component: SearchPage,
        }}/>
    );
  }
}

ReactNative.AppRegistry.registerComponent('RNPerformance', function() { return RNPerformanceApp });