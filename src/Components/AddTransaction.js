import React from 'react';
import { Text , View , StyleSheet } from "react-native";
import { Conatinaer , Content , Form , Item , Input } from "native-base";

function AddTransaction() {
    return (
        <Container>
            <Content>
                <Form>
                    <Item style={ styles.itemTitle }>
                        <Input placeholder="Expense Title"/>
                    </Item>
                    <Item style={ styles.itemPrice }>
                        <Input placeholder="Expense Price" keyboardType="num-pad"/>
                    </Item>
                </Form>
            </Content>
        </Container>
    )
}

const styles= StyleSheet.create({
    itemTitle:{

    },
    itemPrice:{

    }

});

export default AddTransaction;
