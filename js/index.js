function setUp() {
  window.addEventListener('click', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    const elementMouseIsOver = document.elementFromPoint(x, y);
    let text = '';

    if (elementMouseIsOver.textContent) {
      text = elementMouseIsOver.textContent;
    }

    // console.log(text);

    const allStyle = getComputedStyle(elementMouseIsOver);
    const background_color = allStyle.backgroundColor;
    const hexColor = rgba2hex(background_color);
    console.log(hexColor);
  })


  //https://stackoverflow.com/questions/49974145/how-to-convert-rgba-to-hex-color-code-using-javascript
  function rgba2hex(orig) {
    var a, isPercent,
      rgb = orig.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
      alpha = (rgb && rgb[4] || "").trim(),
      hex = rgb ?
      (rgb[1] | 1 << 8).toString(16).slice(1) +
      (rgb[2] | 1 << 8).toString(16).slice(1) +
      (rgb[3] | 1 << 8).toString(16).slice(1) : orig;
  
    if (alpha !== "") {
      a = alpha;
    } else {
      a = 01;
    }
    // multiply before convert to HEX
    a = ((a * 255) | 1 << 8).toString(16).slice(1)
    hex = hex + a;
  
    return '#' + hex;
  }
}

setUp();
// window.onload = () => setUp();

