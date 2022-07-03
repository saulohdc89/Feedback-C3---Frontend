import React, {useState, useEffect,Dispatch} from 'react';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getEmpresas, getAreas,getColaboradores,getFuncoes } from '../../services/http';
import { StepIconClassKey } from '@mui/material';
import Paper from '@mui/material/Paper';

import axios from 'axios';
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Dev Web II
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();
  interface EUser {
  id: string;
  nome: string;
  site:string;
  }

  interface AUser {
    id: string;
    nome: string;
    descricao:string;
    empresaid:string;
  }
  
  interface CUser{
    id:string;
    nome:string;
    senha:string;
    funcaoid:string;
    areaid:string;
  }


export default function MainPage() {

  const [empresas, setEmpresas] = useState<EUser[]>([])
  const [areass, setArea] = useState<AUser[]>([])
  const [colaboradoress,setColaboradores] =  useState<CUser[]>([])

  useEffect(() => {
    axios.get<EUser[]>('http://localhost:4000/empresas')
      .then(({ data }) => {
        setEmpresas(data)
      })
  }, [])

  useEffect(() => {
    axios.get<AUser[]>('http://localhost:4000/areas')
      .then(({ data }) => {
        setArea(data)
      })
  }, [])

  useEffect(() => {
    axios.get<CUser[]>('http://localhost:4000/colaboradores')
    .then(({ data }) => {
      setColaboradores(data)
    })
}, [])


  return (
    <>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell align="right">Nome</TableCell>
          <TableCell align="right">Descrição</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {empresas.map((empresa) => (
          <TableRow
            key={empresa.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {empresa.id}
            </TableCell>
            <TableCell align="right">{empresa.nome}</TableCell>
            <TableCell align="right">{empresa.site}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </>
  );
  
}