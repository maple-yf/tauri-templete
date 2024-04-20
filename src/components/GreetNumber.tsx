import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';

import { decrement, increment } from '../slices/counterSlice';
import { Button } from "@/components/ui/button";
import AlterDialogDemo from './AlterDialogDemo';

import "./greet.css";

export default function GreetNumber() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="columns-2">
      <div>
        <Button variant="destructive">Destructive</Button>
        <AlterDialogDemo/>
      </div>
      <div>
        <div>
          <h1>Greet Number</h1>
        </div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </div>
  );
}
