import React from 'react'

function Fruits(props) {
    return <li>{props.name}</li>;
  }

function Counter() {
    const fruits = ["Mango", "Banana", "Apple", "Orange"];

    return (
      <div class="container p-5 pt-5 align-content-center my-5">
        <div>
        <h1 class="text-white display-1">React way to render a list.</h1>
        <ul>
            <h1>

          {fruits.map((fruit, index) => (
              <Fruits key={index} name={fruit} />
            ))}
            </h1>
        </ul>
      </div>
      </div>
    );
}

export default Counter