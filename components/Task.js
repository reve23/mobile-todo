import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'

const Task = ({task}) =>{
    return(
        <View style={styles.task}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.text}>{task}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    task: {
        backgroundColor:"#fff",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    itemLeft:{
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap"
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor:"#5F95D4",
        opacity:0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    text:{
        maxWidth: "80%",
        fontSize:24,
    }
})

export default Task