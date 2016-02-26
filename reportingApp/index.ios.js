const React = require('react-native');
const Login = require('./Login');

class reportingApp extends React.Component{
  render() {
    return (
      <Login />
    );
  }
};

React.AppRegistry.registerComponent('reportingApp', () => reportingApp);
