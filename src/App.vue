<template>
<main>
  <router-view></router-view>
</main>
</template>

<style>
* {
  box-sizing: border-box;
}
html {
  background-color: #ffffff;
  font-family: "Jost", sans-serif;
}
body {
  margin: 0;
}
header {
  font-size: 1.875rem;
  margin: 3rem auto;
  color: rgb(0, 0, 0);
  text-align: center;
}
#app table,
#app ul {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  list-style: none;
  width: 90%;
  max-width: 40rem;
}
#app li {
  margin: 1rem auto;
  padding: 1rem;
}
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2 {
  font-size: 20px;
  color: #202020;
  margin: 0 0 1rem 0;
}
.headInformation{
  font-size: 24px;
  color: #717577;
}
a,
.button {
  align-items: center;
  appearance: none;
  background-color: #fff;
  border-radius: 24px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #3c4043;
  cursor: pointer;
  display: inline-flex;
  fill: currentcolor;
  font-family: "Google Sans",Roboto,Arial,sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 38px;
  justify-content: center;
  letter-spacing: .25px;
  line-height: normal;
  max-width: 100%;
  overflow: visible;
  padding: 2px 24px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
  will-change: transform,opacity;
  z-index: 0;
  margin-left: 10px;
}
a:hover,
.button:hover {
  background: #F6F9FE;
  color: #174ea6;
}
a:active,
.button:active {
  box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%), 0 8px 12px 6px rgb(60 64 67 / 15%);
  outline: none;
}
a:focus,
.button:focus {
  outline: none;
  border: 2px solid #4285f4;
}
a:disabled,
.button:disabled {
  background-color: rgb(180, 180, 180);
}
a:not(:disabled),
.button:not(:disabled) {
  box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}
a:not(:disabled):hover,
.button:not(:disabled):hover {
  box-shadow: rgba(60, 64, 67, .3) 0 2px 3px 0, rgba(60, 64, 67, .15) 0 6px 10px 4px;
}
a:not(:disabled):focus,
.button:not(:disabled):focus {
  box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}
a:not(:disabled):active,
.button:not(:disabled):active {
  box-shadow: rgba(60, 64, 67, .3) 0 4px 4px 0, rgba(60, 64, 67, .15) 0 8px 12px 6px;
}
a:disabled,
.button:disabled {
  box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
}
#app a:hover,
#app a:active,
#app button:hover,
#app button:active {
  background-color: #202020;
  border-color: #202020;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
#app input {
  font: inherit;
  padding: 0.15rem;
}
input:focus {
  border: 3px solid #555;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
/* https://colorhunt.co/palette/100f0f0f3d3ee2dcc8f1f1f1 */
</style>