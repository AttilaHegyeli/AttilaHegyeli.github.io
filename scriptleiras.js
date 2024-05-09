saveListAsImage() 
    html2canvas(document.querySelector("#app")).then(canvas => {
      const imageData = canvas.toDataURL();
      const img = new Image();
      img.src = imageData;
      document.body.appendChild(img);
    });
  
