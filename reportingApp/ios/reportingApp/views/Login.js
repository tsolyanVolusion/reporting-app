'use strict';
const React = require('react-native');

const {
    Text,
    TextInput,
    View,
    StyleSheet,
    Image,
    TouchableHighlight,
    Component,
    ActivityIndicatorIOS
} = React;

class Login extends Component{
    constructor(props) {
        super(props);

        this.state = {
            showProgress: false
        }
    }

    render() {
        let errorCtrl = <View />;

        if (!this.state.success && this.state.badCredentials) {
            errorCtrl = <Text style={styles.error}>
                That username and password combination did not work.
            </Text>;
        }

        if (!this.state.success && this.state.unknownError) {
            errorCtrl = <Text style={styles.error}>
                We encountered an unexpected error.
            </Text>;
        }

        return (
            <View style={styles.container}>
                <Image style={styles.logo}
                    source={require('image!rocket')} />

                <Text style={styles.heading}>
                    vNext Reporting
                </Text>

                <TextInput 
                    onChangeText={(text) => this.setState({username: text})}
                    style={styles.input}
                    placeholder="username" />

                <TextInput 
                    onChangeText={(text) => this.setState({password: text})}
                    style={styles.input}
                    placeholder="password"
                    password="true" />

                <TouchableHighlight 
                    onPress={this.onLoginPressed.bind(this)}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Log In</Text>
                </TouchableHighlight>



                {errorCtrl}

                <ActivityIndicatorIOS
                    animating={this.state.showProgress}
                    size="large"
                    style={styles.loader} />
            </View>

        );
    }

    onLoginPressed() {
        this.setState({showProgress: true});
        let authService = require('../services/AuthService');

        // authService.login({
        //     username: this.state.username,
        //     password: this.state.password
        // }, (res) => {
        //     this.setState(Object.assign({
        //         showProgress: false
        //     }, res));

        //     if (res.success && this.props.onLogin) {
        //         this.props.onLogin();
        //     }
        // });
        this.props.onLogin();
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: 40,
        alignItems: 'center',
        padding: 10
    },
    logo: {
        width: 66,
        height: 55
    },
    heading: {
        fontSize: 30,
        marginTop: 10,
        color: '#000'
    },
    input: {
        height: 50,
        marginTop: 10,
        padding: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48bbec'
    },
    button: {
        height: 50,
        backgroundColor: '#48bbec',
        alignSelf: 'stretch',
        marginTop: 10,
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 22,
        alignSelf: 'center'
    },
    loader: {
        marginTop: 20
    },
    error: {
        color: 'red',
        marginTop: 10
    }
})

module.exports = Login;