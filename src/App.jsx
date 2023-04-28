import { useState } from 'react'
import { PageContainer } from './components/pageContainer/PageContainer';
import { GlobalStyles } from './globalStyles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './globalStyles/theme';

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <PageContainer>
        
      </PageContainer>
    </ThemeProvider>
  )
}

export default App
