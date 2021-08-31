import axios from 'axios'

const uri="http://localhost:8080/DLitheEbuddy-0.0.1-SNAPSHOT/ws"

export const iterate=async()=>{
    const hai= await axios.get(`${uri}/`)
    return hai
}

export const adding=async(object)=>{
    const yet=await axios.post(`${uri}/new/json`,object)
    return yet
}

export const editing=async(object)=>{
    const hey=await axios.put(`${uri}/edit`,object)
    return hey
}

export const dele=async(id)=>{
    const check=await axios.delete(`${uri}/delete/${id}`)
    return check
}