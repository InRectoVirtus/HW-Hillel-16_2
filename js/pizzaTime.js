window.onload = () => {
  let continuous = new Date().toLocaleTimeString();
  let timeBlock = document.createElement('div');
  document.body.appendChild(timeBlock);

  document.title = `${continuous} -- Open web page timer: 0`
  timeBlock.innerHTML = `<span>${continuous}</span>
                   <span> Open web page timer: 0.</span>`;

  setInterval(() => {
      let timeDate = new Date().toLocaleTimeString();
      let timeShow = Math.round(performance.now() / 1000);

      document.title = `${timeDate}, Open web page timer: ${timeShow}`;
      timeBlock.innerHTML = `<span>${timeDate}</span>
                             <span> Open web page timer: ${timeShow}</span>`
  }, 1000);
};
