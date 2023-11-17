// DUCKS pattern

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
	value: number;
}

const initialState: CounterState = {
	value: 0,
};

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment(state) {
			// looks like it's mutating but it's not due to Redux magic (Immer)
			state.value++;
		},
		decrement(state) {
			state.value--;
		},
		reset(state) {
			state.value = 0;
		},
	},
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;
