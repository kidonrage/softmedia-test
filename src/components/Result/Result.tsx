import React from 'react';
import './Result.scss';

const Result: React.FC = () => {
  return (
    <div className="results-container">
      <ul>
        <li><b>40 000 р.</b> сотрудник будет получать на руки</li>
        <li><b>5977 р.</b> НДФЛ, 13% от оклада</li>
        <li><b>45 977 р.</b> за сотрудника в месяц</li>
      </ul>
    </div>
  )
}

export default Result