import {createSlice} from '@reduxjs/toolkit';


export const arrayListSlice=createSlice({
    name: 'arraylist',
    initialState:{
        array:[
            
        ]
    },
    reducers:{
        addnew:(state, action)=>{
            console.log(action.payload)
            state.array[action.payload.id]=[...state.array[action.payload.id], action.payload.value]
        },
        increment:(state, action)=>{
            state.array[action.payload].sort(function(a, b){return a - b})
        },
        decrement:(state,action)=>{
            state.array[action.payload].sort(function(a, b){return b - a})
        },
        reverse:(state,action)=>{
            state.array[action.payload].reverse();
        },
        addnewlist:(state)=>{
            let newlist=[];
            state.array=[...state.array, newlist];
        },
        reorder:(state, action)=>{
            let index1=action.payload.arrayid
            let index2=action.payload.listid
            let source=action.payload.source;
            let destination=action.payload.destination;
            if(source===destination){
                let idtable=destination.split(' ')[1];
                [state.array[idtable][index2], state.array[idtable][index1]]=[state.array[idtable][index1],state.array[idtable][index2]]
            }
            else{
                let idtable1=source.split(' ')[1];
                let idtable2=destination.split(' ')[1];
                let newitem=state.array[idtable1][index1];
                state.array[idtable1].splice(index1, 1)
                state.array[idtable2].splice(index2, 0, newitem);
            }
        }
    }
})
export const{ increment, decrement, reverse, addnew,addnewlist,reorder}=arrayListSlice.actions

export default arrayListSlice.reducer