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



class Landing extends Component{
    constructor(props) {
        super(props);

        this.state = {
            showProgress: false
        }
    }
  render() {
   return (
    <View style={styles.greet}>
      <Text > Howdy!! </Text>
    </View>
    );

    }
};

const styles = StyleSheet.create({
    greet: {
        flex: 1,
        paddingTop: 40,
        alignItems: 'center',
        padding: 10
    }
  });
module.exports = Landing;