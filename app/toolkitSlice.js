import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const fetchWeather = createAsyncThunk(
  'city/fetchWeather',
  async (_,{rejectWithValue})=>{

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=bishkek&appid=a9f6d60fe4a59c1440099e9a6d10ef6d`)
    
      if(!response.ok){
        throw new Error('server error');
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message)
    }
    
  }
)

const toolkitSlice = createSlice({
  name: "city",
  initialState: {
    city: null,
    status:null,
    error:null
  },
  reducers: {
    getWeather(state,action){
      state.city = action.payload
    }
  },
  extraReducers:{
    [fetchWeather.pending]:(state,action)=>{
      state.status = 'loading';
      state.error = null
    },
    [fetchWeather.fulfilled]:(state,action)=>{
      state.status = 'resolved';
      state.city = action.payload;
    },
    [fetchWeather.rejected]:(state,action)=>{
      state.status = 'rejected';
      state.error = action.payload
    }
  }
});
export const {getWeather} = toolkitSlice.actions;
export default toolkitSlice.reducer;

