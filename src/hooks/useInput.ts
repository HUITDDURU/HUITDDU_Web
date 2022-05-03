import React, { useCallback, useEffect, useState } from "react";
import State from "../interface/State";

type Value = string | number;

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: Value;
}

type Dispatch = [InputProps, State<Value>];
export type EventFilter = (
  e: React.ChangeEvent<HTMLInputElement>
) => React.ChangeEvent<HTMLInputElement>;

const useInput = (
  initValue?: Value,
  filter?: EventFilter,
  debug?: boolean
): Dispatch => {
  const [value, setValue] = useState<Value>(initValue || "");

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (filter) e = filter(e);
      setValue(e.target.value);
    },
    [filter]
  );

  useEffect(() => {
    if (debug) {
      console.log(value);
    }
  }, [debug, value]);

  return [{ onChange, value }, [value, setValue]];
};

export default useInput;
