function getExcuse(data, id) {
  const te1 = document.getElementById(id);
  const te2 = te1.previousElementSibling;

  const ajax = new XMLHttpRequest();
  const url = "https://excuser.herokuapp.com/v1/" + data;

  ajax.open("GET", url, true);

  ajax.onreadystatechange = function () {
    if (this.status === 200 && this.readyState === 4) {
      let meta = JSON.parse(this.responseText);
      if (Array.isArray(meta)) {
        te2.innerHTML = `${meta[0].excuse}`;
      } else {
        te2.innerHTML = `${meta.excuse}`;
      }
    } else {
      // console.log(this.status, this.readyState);
      this.onerror = onerror(te2);
    }
  };
  ajax.send();
}

function onerror(textExcuse2) {
  textExcuse2.textContent = "There was an error!";
}
