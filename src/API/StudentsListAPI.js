const API_URL = 'http://localhost:3001/students'

export const getStudentsListAPI = () => 
    fetch(`${API_URL}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json'
        }
    }).then(res => res.json())

export const updateStudentsListAPI = (student) =>
    fetch(`${API_URL}/${student.id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(student)
    }).then(res => res.json());
    

export const deleteStudentApi = (id) =>
    fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
        }
    })

    
export const addStudentApi = (student) =>
    fetch(`${API_URL}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(student)
    }).then((res) => res.json());