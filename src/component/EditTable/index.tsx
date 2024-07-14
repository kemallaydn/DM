import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { useGlobalContext } from "../../context/GlobalContext";


const EditTable = ({ label, fieldName, value,handleSave }) => {
    const { state ,dispatchAction } = useGlobalContext();
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(value);

    const handleEdit = () => {
        setIsEditing(true);
    };
   
    const handleCancel = async() => {
        setText(value);
        setIsEditing(false);
    };

    return (
        <View>
            {label && <Text style={styles.title}>{label}</Text>}
            {isEditing ? (
                <View style={styles.item}>
                    <TextInput
                        onChangeText={(text) => {
                            setText(text);

                        }}
                        style={styles.input}
                        autoFocus
                        value={text}
                    />
                    <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>


                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                        if(text !== value){

                            handleSave();
                        }
                        setIsEditing(false);
                        
                    }} style={styles.saveButton}>


                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.item}>
                    <Text style={styles.description}>{text}</Text>


                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 15,
        fontWeight: "400",
        margin: 10,
        color: "white",
    },
    description: {
        fontSize: 16,
        margin: 10,
        color: "white",
        fontWeight: "200",
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "rgba(0, 23, 31, 0.66)",
        alignItems: "center",
        borderRadius: 60,
        padding: '1%',
        paddingRight: '4%',

    },
    input: {
        color: "white",
        fontSize: 16,
        flex: 1,
        padding: '3.5%',
        fontWeight: "300",
    },
    saveButton: {
        marginLeft: 10,
        backgroundColor: '#007BFF',
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 10,
    },
    cancelButton: {
        marginLeft: 10,
        backgroundColor: '#DC3545',
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 10,
    },
})
export default EditTable;