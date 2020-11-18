import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import MapView from 'react-native-maps';
import PropTypes from 'prop-types';
import React from 'react';
import { MessageShape } from '../utils/MessageUtils';
const keyExtractor = item => item.id.toString();
export default class MessageList extends React.Component {
    static propTypes = {
        messages: PropTypes.arrayOf(MessageShape).isRequired,
        onPressMessage: PropTypes.func,
    };
    static defaultProps = {
        onPressMessage: () => { },
    };
    renderMessageBody = ({ type, text, uri, coordinate }) => {
        switch (type) {
            case 'text':
                return (
                    <View style={styles.messageStyles}>
                        <Text style={styles.text}>{text}</Text>
                    </View>
                );
            case 'image':
                return <Image style={styles.image} source={{ uri }} />;
            case 'location':
                return (
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            ...coordinate,
                            latitudeDelta: 0.08,
                            longitudeDelta: 0.04,
                        }}>
                        <MapView.Marker coordinate={coordinate} />
                    </MapView>
                );
            default:
                return null;
        }
    };

    renderMessageItem = ({ item }) => {
        const { onPressMessage } = this.props;

        return (
            <View key={item.id} style={styles.messageRow}>
                <TouchableOpacity onPress={() => onPressMessage(item)}>
                    {this.renderMessageBody(item)}
                </TouchableOpacity>
            </View>
        );
    };

    render() {
        const { messages } = this.props;

        return (
            <FlatList
                style={styles.container}
                inverted
                data={messages}
                renderItem={this.renderMessageItem}
                keyExtractor={keyExtractor}
                keyboardShouldPersistTaps={'handled'}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    messageRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 4,
        marginRight: 10,
        marginLeft: 60,
    },
    messageStyles: {
        paddingVertical: 1,
        paddingHorizontal: 10,
        backgroundColor: 'rgb(16,135,255)',
        borderRadius: 10,
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 5,
    },
    map: {
        width: 300,
        height: 300,
        borderRadius: 5,
    },
});