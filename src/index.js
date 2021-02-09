import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore , applyMiddleware, compose  } from 'redux' 
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'
import App from './components/App'


const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const enhancer = composeEnhancers(applyMiddleware(thunk))

// const store = createStore(rootReducer)
const store = createStore(
  rootReducer,
  enhancer
) // 创建数据存储仓库
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)