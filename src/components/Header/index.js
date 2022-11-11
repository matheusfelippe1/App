import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {Feather} from '@expo/vector-icons';

export default function Header ({name}){
    return (
        <View style = { styles.container }>
            <View style = { styles.content}>
                <Text style={styles.username}>{name}</Text>
                <TouchableOpacity style = {styles.buttonUser} activeOpacity={0.9} >
                    <Feather name='user' size={27} color={'#fff'} />
                </TouchableOpacity>
            </View>
        </View>

    )
}