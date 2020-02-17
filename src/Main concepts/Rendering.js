// Реакт-элементы отображают то что будет показано на странице.
// После создания реакт-элемента нельзя изменить его атрибуты или потомков.

// import React from "react"

// export default function Clock() {
//   function tick() {
//     const element = (
//       <div>
//         <h1>Time is...</h1>
//         <p>{new Date().toLocaleTimeString()}</p>
//       </div>
//     );
//   }

//   setInterval(tick, 1000);

// return <div>{}</div>;
// }

// // export default tick;

import React from "react";

export default function Clock(props) {
  const time = new Date().toLocaleTimeString();

  return <div>{time}</div>;
}
