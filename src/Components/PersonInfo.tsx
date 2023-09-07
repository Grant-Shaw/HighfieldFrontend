import React from 'react';

interface PersonInfoProps {
  age: number;
  color: string;
}

const PersonInfo: React.FC<PersonInfoProps> = ({ age, color }) => {
  return (
    <div>
      <p>Age: {age}</p>
      <p>Color: {color}</p>
    </div>
  );
};

export default PersonInfo;