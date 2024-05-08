import { createBrowserRouter, redirect } from 'react-router-dom';
import { DiaDeSorte } from './routes/DiaDeSorte';
import { Lotofacil } from './routes/Lotofacil';
import { Lotomania } from './routes/Lotomania';
import { Megasena } from './routes/Megasena';
import { Quina } from './routes/Quina';
import { Timemania } from './routes/Timemania';

export const router = createBrowserRouter([
  {
    path: '/',
    loader: async () => {
        return redirect('/megasena');
    },
  },
  {
    path: '/diadesorte',
    element: <DiaDeSorte />,
  },
  {
    path: 'lotofacil',
    element: <Lotofacil />,
  },
  {
    path: 'lotomania',
    element: <Lotomania />,
  },
  {
    path: 'megasena',
    element: <Megasena />,
  },
  {
    path: 'quina',
    element: <Quina />,
  },
  {
    path: 'timemania',
    element: <Timemania />,
  }
]);