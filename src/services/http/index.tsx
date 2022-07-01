import axios from 'axios';

export async function getPessoas(){
    const resposta = await axios.get('http://localhost:4000/pessoas')
    .then((response)=>{
        console.log(response)
        return response
    } )
    if(resposta) return resposta;
    else return null;
}

export async function getSetores(){
    const resposta = await axios.get('http://localhost:4000/setor')
    .then((response)=>{
        console.log(response)
        return response
    } )
    if(resposta) return resposta;
    else return null;
}

export async function getFeedback(){
    const resposta = await axios.get('http://localhost:4000/feedback')
    .then((response)=>{
        console.log(response)
        return response
    } )
    if(resposta) return resposta;
    else return null;
}

