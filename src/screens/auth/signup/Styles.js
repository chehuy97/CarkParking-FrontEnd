import React from 'react'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: '#455a64',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerForm: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerLogo: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',

    },
    logoText: {
        marginVertical: 15,
       fontSize: 18, 
       color: 'white'
    },
    signupTextCont: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row'
    },
    signupText: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 16,
    },
    signupButton: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 4,
    },
    inputBox: {
        width: 300,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: 'white',
        marginVertical: 10
    },
    button: {
        backgroundColor: '#1c313a',
        width: 300,
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center'
    },
})