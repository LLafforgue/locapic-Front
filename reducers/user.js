import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { nickname: null, places: [] },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateNickname: (state, action) => {
      state.value.nickname = action.payload;
    },
    addPlace: (state, action) => {
      state.value.places.push(action.payload);  
    },
    removePlace: (state, action) => {
      state.value.places = state.value.places.filter(e => e.name !== action.payload);
    },
    addManyPlaces:(state, action)=>{
      console.log('ok')
      state.value.places=[];
      
      action.payload.forEach(el=>{
        if(!state.value.places.some(ele=>ele.name===el.name)){
          state.value.places.push({name:el.name, latitude:el.latitude, longitude:el.longitude})
        }})
      
    },
    deleteAll:(state)=>{
      state.value.places=[];
    }
  },
});

export const { updateNickname, addPlace, removePlace, addManyPlaces , deleteAll} = userSlice.actions;
export default userSlice.reducer;
