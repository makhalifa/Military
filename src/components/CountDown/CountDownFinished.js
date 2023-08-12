import React from 'react';

const CountDownFinished = ({date}) => {
  const options = {
    weekday: 'long', // or 'short'
    year: 'numeric',
    month: 'long', // or 'short'
    day: 'numeric'
  };
  
  const arabicDate = new Date(date.date).toLocaleDateString('ar-EG', options);
  return (
    <article className="article br2 ba dark-gray  b--black-10 w-75 br5 b--black center">
        {/* <h1 className="f3">{date.title}</h1> */}
        <p className="f6">{arabicDate}</p>
        {/* div contain one row img check mark in the right and p in the left */}
        <div className="flex justify-center">
          <div className="flex flex-column items-center">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/5290/5290081.png"
              className="nav-logo dib w2 h2 br-100"
              alt="Site Name"
            />
            <p className="f4">تم الإنتهاء من {date.title}</p>
          </div>
        </div>
      </article>
  );
}

export default CountDownFinished;