import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import App from './app/App'
import { Provider } from 'react-redux'
import store from './app/store'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { BrowserRouter as Router } from 'react-router-dom'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffc947',
      main: '#FF9800',
      dark: '#c66900',
      contrastText: 'rgba(0,0,0,0.61)',
    },
    secondary: {
      main: '#30daf4',
    },
    type: 'dark',
  },
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
