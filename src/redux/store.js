import { configureStore } from '@reduxjs/toolkit'

import { popularApi } from '../services/popularApi'


export const store = configureStore({
  reducer: {
    
    [popularApi.reducerPath]: popularApi.reducer,
  },
  
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(popularApi.middleware),
    
})

