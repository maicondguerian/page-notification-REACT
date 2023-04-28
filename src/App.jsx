import { useState } from 'react'
import { PageContainer } from './components/pageContainer/PageContainer';
import { GlobalStyles } from './globalStyles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './globalStyles/theme';
import { NotificationBar } from './components/pageContainer/notificationBar/NotificationBar';
import { Notifications } from './components/notifications/Notifications';

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <PageContainer>
        <Notifications />
      </PageContainer>
    </ThemeProvider>
  )
}

export default App
