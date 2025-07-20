import { createSlice } from "@reduxjs/toolkit";
 
const bookSlice=createSlice({
 
name:'book',
 
initialState:{
java:10,
dsa:20
 
},
reducers:
{
returnBookdsa:(state)=>
{
    state.dsa+=1
},
issueBookdsa:(state)=>
{
    state.dsa-=1
},
returnBookjava:(state)=>
{
    state.java+=1
},issueBookjava:(state)=>
{
    state.java-=1
},issueBookdsaN:(state,action)=>
{
    state.dsa-=action.payload
},
returnBookdsaN:(state,action)=>
{
    state.dsa+=action.payload
}
 
}
 
 
 
 
 
 
 
})
 
export const {returnBookdsa,issueBookdsa, returnBookjava, issueBookjava, issueBookdsaN, returnBookdsaN}=bookSlice.actions
export default  bookSlice.reducer;