import axios from 'axios';

interface ISetor{
     id:number,
     nome:string,
     descricao:string
}

interface IPessoas{
     id:number,
     nome:string,
    email:string,
    setor:ISetor
}
interface IFeedback{
    id:number,
    titulo:string,
    texto:string,
    avaliado:IPessoas
}

export async function getPessoas(){
    if (await axios.get('http://localhost:4000/pessoas'))
        return await axios.get('http://localhost:4000/pessoas');
    else
        return null;
}

export async function getSetores() {
    if (await axios.get('http://localhost:4000/setores'))
        return await axios.get('http://localhost:4000/setores');
    else
        return null;
}

export async function getFeedback() {
    if (await axios.get('http://localhost:4000/feedback'))
        return await axios.get('http://localhost:4000/feedback');
    else
        return null;
}

