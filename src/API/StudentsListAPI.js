import React from "react";
const API_URL = 'http://localhost:3000/students'

export const getStudentsListAPI = () => 
    fetch(`${API_URL}`, {
        headers: {
            Accept: 'application/json'
        }
    })
      .then(res => res.json())