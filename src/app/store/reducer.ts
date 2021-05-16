import { createReducer, on, Action } from '@ngrx/store';
import { fetchedSuccess, incrementDecrementCount, successPostMessage } from './action';

import { toggleAction } from './action';

export const initialState = { toggleState: false, count: 0, getParam: [] };


export interface InitialInterface {
  toggleState: boolean,
  count: number,
  user: Array<ParamInterface>
}

export interface ParamInterface {
  userId: number,
  id: number,
  title: string,
  body: string
};

export const actionReducer = createReducer(
  initialState,
  on(toggleAction, (state, payload) => {
    // console.log(state, payload);
    const invertToggle = !payload.isToggle;
    return { ...state, toggleState: invertToggle };
  })
);

export const incrementReducer = createReducer(
  initialState,
  on(incrementDecrementCount, (state, payload) => {
    let { count } = state;
    if (payload.countType === 'plus') {
      count++;
    } else if (payload.countType === 'minus') {
      count--;
    }
    // console.log(state, payload);
    return { ...state, count };
  }),
  on(successPostMessage, (state, payload) => {
    console.log(state, payload);
    return state;
  })
);

export const getParamReducer = createReducer(
  initialState,
  on(fetchedSuccess, (state, payload: any) => {
    // console.log(state, payload)  
    return { ...state, getParam: payload};
  })
);
