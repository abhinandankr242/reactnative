import { Link, Stack } from 'expo-router';
import { StyleSheet, TextInput } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import './register.css'; 
//import { Card, CardContent, Typography, Button, CardHeader } from '@mui/material';

export default function RegisterScreen() {
  return (
    <>
      <Stack.Screen options={{ title: ' ' }} />
      <ThemedView style={styles.container}>
      <div className="row">
      <section className="vh-100 vw-100 bg-dark">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col" style={{overflowY : 'auto'}}>
        <div className="card card-registration my-1">
          <div className="row g-0">
            <div className="col-xl-6 d-none d-xl-block" >
              <img src="assets/images/patientRegistration.png"
                alt="Sample photo" className="img-fluid"
                width={"100%"}
                style={{borderTopLeftRadius :".25rem" , borderBottomLeftRadius :".25rem", height:"100vh"}} />
            </div>
            <div className="col-xl-6">
              <div className="card-body p-md-5 text-black" style={{maxHeight : "100vh", overflow : "scroll"}}>
                <h3 className="mb-3 text-uppercase" style={{marginBottom : '10px'}}>Patient registration form</h3>

                <div className="row">
                  <div className="col-md-6 mb-2">
                    <div data-mdb-input-init className="form-outline">
                      <input type="text" id="form3Example1m" className="form-control form-control-lg" />
                      <label className="form-label" >First name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-2">
                    <div data-mdb-input-init className="form-outline">
                      <input type="text" id="form3Example1n" className="form-control form-control-lg" />
                      <label className="form-label" >Last name</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-2">
                    <div data-mdb-input-init className="form-outline">
                      <input type="text" id="form3Example1m1" className="form-control form-control-lg" />
                      <label className="form-label" >Mother's name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-2">
                    <div data-mdb-input-init className="form-outline">
                      <input type="text" id="form3Example1n1" className="form-control form-control-lg" />
                      <label className="form-label" >Father's name</label>
                    </div>
                  </div>
                </div>

                <div data-mdb-input-init className="form-outline mb-2">
                  <input type="text" id="form3Example8" className="form-control form-control-lg" />
                  <label className="form-label" >Address</label>
                </div>

                <div className="d-md-flex justify-content-start align-items-center mb-2 py-2">

                  <h6 className="mb-0 me-4">Gender: </h6>

                  <div className="form-check form-check-inline mb-0 me-4">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                      value="option1" />
                    <label className="form-check-label" >Female</label>
                  </div>

                  <div className="form-check form-check-inline mb-0 me-4">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                      value="option2" />
                    <label className="form-check-label" >Male</label>
                  </div>

                  <div className="form-check form-check-inline mb-0">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                      value="option3" />
                    <label className="form-check-label" >Other</label>
                  </div>

                </div>

                <div className="row">
                  <div className="col-md-6 mb-2">

                    <select data-mdb-select-init>
                      <option value="1">State</option>
                      <option value="2">Option 1</option>
                      <option value="3">Option 2</option>
                      <option value="4">Option 3</option>
                    </select>

                  </div>
                  <div className="col-md-6 mb-2">

                    <select data-mdb-select-init>
                      <option value="1">City</option>
                      <option value="2">Option 1</option>
                      <option value="3">Option 2</option>
                      <option value="4">Option 3</option>
                    </select>

                  </div>
                </div>

                <div data-mdb-input-init className="form-outline mb-2">
                  <input type="text" id="form3Example9" className="form-control form-control-lg" />
                  <label className="form-label" >DOB</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-2">
                  <input type="text" id="form3Example90" className="form-control form-control-lg" />
                  <label className="form-label" >Pincode</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-2">
                  <input type="text" id="form3Example99" className="form-control form-control-lg" />
                  <label className="form-label" >Course</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-2">
                  <input type="text" id="form3Example97" className="form-control form-control-lg" />
                  <label className="form-label" >Email ID</label>
                </div>

                <div className="d-flex justify-content-end pt-3">
                  <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-light btn-lg">Reset all</button>
                  <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-warning btn-lg ms-2">Submit form</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
      
      </ThemedView>
     
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
