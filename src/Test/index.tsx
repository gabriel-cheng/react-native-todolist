import { View, Text, StyleSheet } from "react-native";

export function test() {
    return(
        <View>
            <Text style={ styles.test }>Testando importação</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    test: {
        color: "green"
    }
});

