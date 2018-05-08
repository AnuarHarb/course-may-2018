function registerHandlers() {
  const as = document.getElementsByTagName('a');
  for (i in as) {
    as[i].onclick = closure(i);
  }

  function closure (i) {
    return  () => {
      alert(i);
      return false;
    }
  }
}
