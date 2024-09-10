import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import axios from 'axios';
import { useState } from 'react';
import { Button } from 'react-native'
 

//import / Card, CardContent, Typography, Button, CardHeader } from '@mui/material';


export default function apiScreen() {

    const [userID, setUserId] = useState (150151)
    
    const [status, setstatus] = useState (150151)
    const [name, setname] = useState ('dfkjdfk')

    const callApi = async() => {
      
    const response = await axios.get("https://localhost:44359/API/TEST/getSessionID")
    console. log(response)
    
        }

    const callApi1 = async() => {
    const response = await axios.get(`https://localhost:44359/getAnswerFeatureDetail/${userID}`)
    console.log(response)
    }

    const callApi2 = async() => {
    const response = await axios.get(`https://localhost:44359/getAnswerFeatureDetail/${userID}`)
    console.log(response)
    }

    const callApi3 = async() => {
    
    const response = await axios.post ("https://localhost:44359/PostAnswerFeatureDetail", {status, name})
    console.log(response)
    }


 
    return(
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
    </ThemedView>
    );
}

const styles = StyleSheet.create({
container: { 
    flex: 1,
     alignItems: 'center', justifyContent: 'center', padding: 20,},
link: {
marginTop: 15, paddingVertical: 15,},});