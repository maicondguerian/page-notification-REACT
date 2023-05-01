import { PageContainer } from './components/pageContainer/PageContainer';
import { GlobalStyles } from './globalStyles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './globalStyles/theme';
import { Notifications } from './components/notifications/Notifications';
import { ReplyComment } from './components/replyModal/replyComment';


function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <PageContainer>
        <Notifications />
      </PageContainer>
    </ThemeProvider>
  )
}

export default App;
