import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import axios from 'axios';
import { useState } from 'react';
import { Button, View, Text } from 'react-native';
import { callAxios } from '../app/axiosAPIcall';

//import / Card, CardContent, Typography, Button, CardHeader } from '@mui/material';


export default function apiScreen() {

    const [userID, setUserId] = useState(150151)
    const [status, setstatus] = useState(150151)
    const [name, setname] = useState('dfkjdfk')
    const [users, setUsers] = useState([])

    const [api1data, setapi1data]= useState([])

    const handleAP14 = () => {
        const dataObj = {};
        dataObj.userID = '3434';
        dataObj.name = 'abhi';

        const request = {};
        request.method = 'post';
        request.url = 'PostAnswerFeatureDetail';
        request.reqBody = dataObj;

        callAxios(request).then((response) => {
            let message = '';
            if (response && response.data) {
                message = response.data;
                console.log(message)
            }
        })

    }

    const handleAP13 = () => {
        const dataObj = {};
        const request = {};
        request.method = 'post';
        request.url = 'PostAnswerFeatureDetailWOP';
        request.reqBody = dataObj;

        callAxios(request).then((response) => {
            let message = '';
            if (response && response.data) {
                message = response.data;
                console.log(message)
            }
        })
    }
    let message1 = '';
    const handleAP1 = () => {
        const dataObj = {};
        const request = {};
        request.method = 'get';
        request.url = 'API/TEST/getSessionID';
        request.reqBody = dataObj;

        callAxios(request).then((response) => {

            if (response && response.data) {
                message1 = response.data;
                setapi1data(message1[0].sessionkey)
                console.log(message1[0].sessionkey)
            }
        })
    }

    const handleAP12 = () => {
        const dataObj = {};
        const request = {};
        request.method = 'get';
        request.url = `getAnswerFeatureDetail/${userID}`;
        request.reqBody = dataObj;

        callAxios(request).then((response) => {
            let message = '';
            if (response && response.data) {
                message = response.data;
                console.log(message)
            }
        })
    }

    const callApi = async () => {
        const response = await axios.get("https://localhost:44359/API/TEST/getSessionID")
        console.log(response)
    }

    const callApi1 = async () => {
        const response = await axios.get(`https://localhost:44359/getAnswerFeatureDetail/${userID}`)
        console.log(response)
    }

    const callApi2 = async () => {
        const response = await axios.get(`https://localhost:44359/getAnswerFeatureDetail/${userID}`)
        console.log(response)
    }

    const callApi3 = async () => {
        const response = await axios.post("https://localhost:44359/PostAnswerFeatureDetail", { status, name })
        console.log(response)
    }

    return (
        <ThemedView >
            <Button
                title="Press me"
                onPress={callApi}
            />

            <Button
                title="Press me"
                onPress={callApi1}
            />


            <Button
                title="Press me"
                onPress={callApi2}
            />

            <Button
                title="Press me"
                onPress={callApi3}
            />


            <Button
                title="handleAP1 me"
                onPress={handleAP1}
            />
             <Text>  user name : {api1data}</Text> 

            <Button
                title="handleAP12 me"
                onPress={handleAP12}
            />

            <Button
                title="handleAP13 me"
                onPress={handleAP13}
            />

            <Button
                title="handleAP14 me"
                onPress={handleAP14}
            />

            {/* <button onClick={handleAP1} title="fghdfgd" >handleAP1</button>

            <button onClick={handleAP12} title="fghdfgd" >handleAP12</button>

            <button onClick={handleAP13} title="fghdfgd" >handleAP13</button>

            <button onClick={handleAP14} title="fghdfgd" >handleAP14</button> */}

        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', justifyContent: 'center', padding: 20,
    },
    link: {
        marginTop: 15, paddingVertical: 15,
    },
});

