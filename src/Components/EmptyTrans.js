import React from 'react';
import { Text, View } from "react-native";

function EmptyTrans() {
    return (
            <View style={{flex: 1}}>
                <View style={{alignItems: 'center', marginTop: 200}}>
                    <Text style={{fontSize: 20, fontWeight: '400'}}>No Transaction</Text>
                </View>
            </View>
    );
}
export default EmptyTrans;
