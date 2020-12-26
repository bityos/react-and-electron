import React from 'react';

export const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '600px'}}>
      {props.children}
    </div>
  );
};