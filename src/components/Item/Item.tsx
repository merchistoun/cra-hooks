import React from "react";

interface Props {
  value: string | number;
}

export const Item = (props: Props): React.ReactElement => {
  const { value } = props;

  return <div>{value}</div>;
};
