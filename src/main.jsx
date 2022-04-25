import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './components/AppRoutes';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/lib/locale/ru_RU';

import 'antd/dist/antd.css';
import 'moment/dist/locale/ru';
import moment from 'moment';
moment.locale('ru');
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider locale={ruRU}>
        <AppRoutes />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
