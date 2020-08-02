/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { FC, memo } from 'react';

const withMemo = (Component: FC, checkedProps: Array<string>): FC => {
  function areEqual(
    prevProps: { [x: string]: any },
    nextProps: { [x: string]: any },
  ) {
    return checkedProps.every((checkedProp): boolean => {
      return (
        JSON.stringify(prevProps[checkedProp]) ===
        JSON.stringify(nextProps[checkedProp])
      );
    });
  }
  return memo(Component, areEqual);
};

export default withMemo;
