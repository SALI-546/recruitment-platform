'use client';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import theme from './themeConfig';
import AntdRegistry from './AntdRegistry'; // Mise à jour ici
import '../app/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <AntdRegistry> {/* Mise à jour ici */}
            <ConfigProvider theme={theme}>
              {children}
            </ConfigProvider>
          </AntdRegistry>
        </Provider>
      </body>
    </html>
  );
}