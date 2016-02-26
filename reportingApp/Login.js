'use strict';
const React = require('react-native');
const buffer = require('buffer');

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

                <ActivityIndicatorIOS
                    animating={this.state.showProgress}
                    size="large"
                    style={styles.loader} />
            </View>

        );
    }

    onLoginPressed() {
        this.setState({showProgress: true});

        let b = new buffer.Buffer(`${this.username}:${this.password}`);
        let auth64 = b.toString('base64')

        fetch('https://api.github.com', {
            headers: {
                'Authorization': `Basic ${auth64}`
            }
        })
        .then((res) => {
            if (res.status >= 200 && res.status < 300) {
                return res;
            }

            if (res.status === 401) {
                throw 'Bad credentials';
            }

            throw 'Error';
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
        })
        .catch((err) => {
            console.log(`err: ${err}`)
        })
        .finally(() => {
            this.setState({showProgress: false});
        });
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
    }
})

module.exports = Login;