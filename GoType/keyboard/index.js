const Backquote = document.getElementById("Backquote");
const Digit1 = document.getElementById("Digit1");
const Digit2 = document.getElementById("Digit2");
const Digit3 = document.getElementById("Digit3");
const Digit4 = document.getElementById("Digit4");
const Digit6 = document.getElementById("Digit6");
const Digit7 = document.getElementById("Digit7");
const Digit8 = document.getElementById("Digit8");
const Digit9 = document.getElementById("Digit9");
const Digit0 = document.getElementById("Digit0");
const Minus = document.getElementById("Minus");
const Equal = document.getElementById("Equal");
const Tab = document.getElementById("Tab");
const KeyQ = document.getElementById("KeyQ");
const KeyW = document.getElementById("KeyW");
const KeyE = document.getElementById("KeyE");
const KeyR = document.getElementById("KeyR");
const KeyT = document.getElementById("KeyT");
const KeyY = document.getElementById("KeyY");
const KeyU = document.getElementById("KeyU");
const KeyI = document.getElementById("KeyI");
const KeyO = document.getElementById("KeyO");
const KeyP = document.getElementById("KeyP");
const BracketLeft = document.getElementById("BracketLeft");
const BracketRight = document.getElementById("BracketRight");
const Backslash = document.getElementById("Backslash");
const NumpadMultiply = document.getElementById("NumpadMultiply");

const CapsLock = document.getElementById("CapsLock");
const KeyA = document.getElementById("KeyA");
const KeyS = document.getElementById("KeyS");
const KeyD = document.getElementById("KeyD");
const KeyF = document.getElementById("KeyF");
const KeyG = document.getElementById("KeyG");
const KeyH = document.getElementById("KeyH");
const KeyJ = document.getElementById("KeyJ");
const KeyK = document.getElementById("KeyK");
const KeyL = document.getElementById("KeyL");
const Semicolon = document.getElementById("Semicolon");
const Quote = document.getElementById("Quote");
const Enter = document.getElementById("Enter");
const NumpadAdd = document.getElementById("NumpadAdd");

document.addEventListener("keydown", (e) => {
     let key = e.code;
     keySwitcher(key);
     console.log(key);
});

const keySwitcher = (key) => {
     switch (key) {
          case "Backquote":
               Backquote.style.backgroundColor = "#ff4000ff";
               break;
          case "Digit1":
               Digit1.style.backgroundColor = "#ff4000ff";
               break;
          case "Tab":
               Tab.style.backgroundColor = "#ff4000ff";
               break;
          case "KeyQ":
               KeyQ.style.backgroundColor = "#ff4000ff";
               break;
          case "KeyA":
               KeyA.style.backgroundColor = "#ff4000ff";
               break;
          case "KeyZ":
               KeyZ.style.backgroundColor = "#ff4000ff";
               break;
          case "CapsLock":
               CapsLock.style.backgroundColor = "#ff4000ff";
               break;

          default:
               break;
     }
};
