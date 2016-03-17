'use strict';
const React = require('react-native');

const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  NavigatorIOS,
  TouchableOpacity,
  Component
} = React;

import { setTheme, MKColor } from 'react-native-material-kit';

// customize the material design theme
setTheme({
  primaryColor: MKColor.Purple,
  primaryColorRGB: MKColor.RGBPurple,
  accentColor: MKColor.Amber,
});

let Buttons = require('../../../MDcomponents/buttons');
let TextFields = require('../../../MDcomponents/textfields');
let Toggles = require('../../../MDcomponents/toggles');
let Progress = require('../../../MDcomponents/progress');
let Sliders = require('../../../MDcomponents/sliders');
let Cards = require('../../../MDcomponents/cards');

class Landing extends Component{
    constructor(props) {
        super(props);

        this.state = {
            showProgress: false
        }
    }
  render() {
   return (
      <ScrollView style={styles.list}
                  contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={() => {
          this.props.navigator.push({
            title: 'Buttons',
            component: Buttons,
          });
        }}>
          <Text style={styles.pushLabel}>Buttons</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.props.navigator.push({
            title: 'Cards',
            component: Cards,
          });
        }}>
          <Text style={styles.pushLabel}>Cards</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.props.navigator.push({
            title: 'Loading',
            component: Progress,
          });
        }}>
          <Text style={styles.pushLabel}>Loading</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.props.navigator.push({
            title: 'Sliders',
            component: Sliders,
          });
        }}>
          <Text style={styles.pushLabel}>Sliders</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.props.navigator.push({
            title: 'Text Fields',
            component: TextFields,
          });
        }}>
          <Text style={styles.pushLabel}>Text Fields</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.props.navigator.push({
            title: 'Toggles',
            component: Toggles,
          });
        }}>
          <Text style={styles.pushLabel}>Toggles</Text>
        </TouchableOpacity>
      </ScrollView>
    );

    }
};

var Example = React.createClass({
  render: function () {
    return (
      <NavigatorIOS
        style={{flex:1}}
        initialRoute={{
          component: Landing,
          title: 'Examples',
        }}
      />
    );
  },
});

var styles = StyleSheet.create({
  list: {
    backgroundColor: '#F5FCFF',
    paddingTop: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 20, marginBottom: 0,
  },
  pushLabel: {
    padding: 10,
    color: '#2196F3',
  }
});


module.exports = Landing;