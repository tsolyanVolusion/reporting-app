'use strict';
const React = require('react-native');

const {
    Text,
    View,
    Image,
    StyleSheet,
    Component
} = React;

class Landing extends Component{
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo}
                    source={require('image!rocket')} />

                <Text style={styles.heading}>
                    Howdy!! Build report here...
                </Text>
            </View>
        );
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
    }
})

module.exports = Landing;