import { Stack } from 'expo-router'; 
import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText'; 
import { ThemedView } from '@/components/ThemedView';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

//import / Card, CardContent, Typography, Button, CardHeader } from '@mui/material';


export default function LoginScreen() {

    const [userID, setUserId] = useState (150151)
    
    const [status, setstatus] = useState (150151)
    const [name, setname] = useState ('dfkjdfk')

    const callApi = async() => {
      
    const response = await axios.get("http://49.50.112.150:83/API/TEST/getSessionID")
    console. log(response)
    
}

const callApi1 = async() => {
    const response = await axios.get(`http://49.50.112.150:83/getAnswerFeatureDetail/${userID}`)
    console.log(response)
}

const callApi2 = async() => {
    const response = await axios.get(`http://49.50.112.150:83/getAnswerFeatureDetail/${userID}`)
    console.log(response)
}

const callApi3 = async() => {
    
const response = await axios.post ("http://49.50.112.150:83/PostAnswerFeatureDetail", {status, name})
    console.log(response)
}


 
return(
<>
    <Stack.Screen options={{ title: 'The Test Project' }} />
    <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg"
          onClick={callApi}    style={{paddingLeft :"2.5rem" , paddingRight : "2.5rem" }}>GET</button>
   <br/>
   <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg"
          onClick={callApi1}    style={{paddingLeft :"2.5rem" , paddingRight : "2.5rem" }}>GET WITH PARA</button>
  
  <br/>
   <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg"
          onClick={callApi1}    style={{paddingLeft :"2.5rem" , paddingRight : "2.5rem" }}>POST</button>

<br/>
   <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg"
          onClick={callApi3}    style={{paddingLeft :"2.5rem" , paddingRight : "2.5rem" }}>POST WITH PARA</button>

</>
);
}

const styles = StyleSheet.create({
container: { 
    flex: 1,
     alignItems: 'center', justifyContent: 'center', padding: 20,},
link: {
marginTop: 15, paddingVertical: 15,},});