import React, { useState } from "react";
import { StyleSheet, View, Text, Modal, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { globalStyles } from '../styles/global';
import Card from "../shared/card";
import ReviewForm from "./reviewForm";


export default function Home ({ navigation }) {
    const [ modalOpen, setModalOpen ] = useState(false)
    const [ reviews, setReviews ] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: 1 },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: 2 },
        { title: 'Not So "Final" Fantasy', rating: 2, body: 'lorem ipsum', key: 3 },
    ]);

    const addReview = (review) => {
      review.key = reviews.length + 1;
      setReviews((currentReviews) => {
        console.log(review);
        return [review, ...currentReviews]
      });
      setModalOpen(false);
    }


return (
        <View style={globalStyles.container}>

            <Modal visible={modalOpen}  animationType='slide' >
                <TouchableWithoutFeedback  onPress={Keyboard.dismiss} >
                   <View style={styles.modalContent}>
                       <MaterialIcons 
                           name="close"
                           size={24}
                           onPress={() => setModalOpen(false)}
                           style={{ ...styles.modalToggle, ... styles.modalClose }} />
   
                       <ReviewForm  addReview={addReview} />
                   </View>
                </TouchableWithoutFeedback>

            </Modal>

            <MaterialIcons 
                name="add"
                size={24}
                onPress={() => setModalOpen(true)}
                style={styles.modalToggle} />

            <FlatList 
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Review', item)}>
                        <Card>
                            <Text> { item.title } </Text>
                        </Card>
                    </TouchableOpacity>
                )}  />
        </View>
    )
}

const styles = StyleSheet.create({
    modalContent: {
        flex: 1,
    },

    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },

    modalClose: {
        marginTop: 20,
        marginBottom: 0,

    }
})