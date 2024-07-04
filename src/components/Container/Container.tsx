import React, { useEffect } from "react";
import { useFibonacci } from "../../hooks";
import { Item } from "../";

export const Container = (): React.ReactElement => {
  const [seq, setSeq] = React.useState<string[]>([]);
  const { fibonacci } = useFibonacci();

  useEffect(() => {
    setSeq(fibonacci(50));
  }, [fibonacci]);

  return (
    <>
      {seq.map((s, i) => (
        <Item value={s} key={i} />
      ))}
    </>
  );
};
