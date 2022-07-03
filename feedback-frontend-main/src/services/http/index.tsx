import axios from 'axios';

export async function getEmpresas(){
    const response = await axios.get('http://localhost:4000/empresas');
    if(response) return response;
    else return null;
}

export async function getAreas(){
    const response = await axios.get('http://localhost:4000/areas');
    if(response) return response;
    else return null;
}

export async function getFuncoes(){
    const response = await axios.get('http://localhost:4000/funcoes');
    if(response) return response;
    else return null;
}

export async function getColaboradores(){
    const response = await axios.get('http://localhost:4000/colaboradores');
    if(response) return response;
    else return null;
}