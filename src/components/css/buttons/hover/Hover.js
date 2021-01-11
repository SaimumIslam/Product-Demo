import React from "react";
import "./HoverSecond.css";
// import "./HoverFirst.css";
//not used

export default function Hover() {
  React.useEffect(() => {
    document
      .querySelectorAll(".button")
      .forEach(
        (button) =>
          (button.innerHTML =
            "<div><span>" +
            button.textContent.trim().split("").join("</span><span>") +
            "</span></div>")
      );
  }, []);
  return (
    <div>
      <a href='https://codepen.io/aaroniker/pen/bGGVMbY' className='button'>
        Button
      </a>
      <a
        href='https://codepen.io/aaroniker/pen/bGGVMbY'
        className='button reverse dark'
      >
        Reverse
      </a>
      <a
        href='https://codepen.io/aaroniker/pen/bGGVMbY'
        className='button fast white'
      >
        Fast
      </a>
    </div>
  );
}
