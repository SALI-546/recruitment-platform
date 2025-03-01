'use client';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import theme from './themeConfig';
import AntdRegistry from './AntdRegistry';
import '../app/globals.css';
import { I18nextProvider } from 'react-i18next';
import i18n from '../public/i18n'; 

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={i18n.language || 'en'}>
      <body>
        <Provider store={store}>
          <I18nextProvider i18n={i18n}>
            <AntdRegistry>
              <ConfigProvider theme={theme}>
                {children}
              </ConfigProvider>
            </AntdRegistry>
          </I18nextProvider>
        </Provider>
      </body>
    </html>
  );
}