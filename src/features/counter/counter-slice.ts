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
		incremented(state) {
			// looks like it's mutating but it's not due to Redux magic (Immer)
			state.value++;
		},
		amountAdded(state, action: PayloadAction<number>) {
			state.value += action.payload;
		},
	},
});

export const { incremented, amountAdded } = counterSlice.actions;

export default counterSlice.reducer;
