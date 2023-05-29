'use client';

import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './GlobalRedux/Features/counter/counterSlice';
import { RootState } from './GlobalRedux/store';

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <main>
      <button
        onClick={() => dispatch(increment())}
      >Increment</button>
      <span>{count}</span>
      <button
        onClick={() => dispatch(decrement())}
      >Decrement</button>
      <button
        onClick={() => dispatch(incrementByAmount(2))}
      >Increment by 2</button>
    </main>
  )
}