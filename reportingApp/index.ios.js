const React = require('react-native');
const Login = require('./ios/reportingApp/Login');

const {
    Text,
    View,
    StyleSheet,
    Component
} = React;

class reportingApp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        showProgress: false,
        isLoggedIn: false
    }
    this.onLogin =this.onLogin.bind(this);
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
          <View style={styles.container}>
              <Text style={styles.welcome}>Howdy!!!</Text>
          </View>
        );
    } else {
      return (
        <Login onLogin={this.onLogin} />
      );
    }
  }

  onLogin() {
    this.setState({isLoggedIn: true});
  }

};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
})
React.AppRegistry.registerComponent('reportingApp', () => reportingApp);
