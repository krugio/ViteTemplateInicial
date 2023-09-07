import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  exemplo:'',
  
 
}

export const exemplo = createSlice({
  name: 'exemplo',
  initialState,
  reducers: {
  
   

    adcExemplo(state, { payload }) {
      state.exemplo = payload
    },

   
    reiniciarExemplo(){
      return initialState
      
    }
  },
})

export const {adcExemplo } = exemplo.actions
export default exemplo.reducer