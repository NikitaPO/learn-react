import React from "react";

/* JSX - это встроенный в React язык разметки, который преобразуется в js код после компиляции.

Элемены из JSX кода можно присваивать переменным, передавать в функции, или возвращать из функций. 
JSX элементы могут быть использованы внутри условных операторов

Примеры JSX элементов:
=========================================>
*/
const text = <span className="title">Very reactive</span>;

export default function JSX() {
  return (
    <p className="react_paragraph">
      <span>React is...</span>
      {text}
    </p>
  );
}

// После преобразования JSX код становится таким:

// React.createElement('h1', {className: 'title', children: 'Very reactive'})

// И в последствии преобразуется в объект похожий на этот:

// const text = {
//   type: 'h1',
//   props: {
//     className: 'title',
//     children: 'Very reactive'
//   }
// }
