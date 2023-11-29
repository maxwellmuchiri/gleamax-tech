// components/SignList.js
import React from 'react';

const SignList = ({ signs }) => {
  return (
    <div>
      <h2>Signs for Sale</h2>
      <ul>
        {signs.map((sign, index) => (
          <li key={index}>{sign}</li>
        ))}
      </ul>
    </div>
  );
};

export default SignList;
