// Highlight images with random AI % (demo for judges)
document.querySelectorAll('img').forEach((img) => {
  const aiPercent = Math.floor(Math.random() * 100); // Demo only!
  img.style.border = '3px solid red';
  img.insertAdjacentHTML('afterend', 
    `<div style="color: red; font-weight: bold;">AI: ${aiPercent}%</div>`
  );
});
