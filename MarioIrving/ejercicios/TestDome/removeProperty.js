function removeProperty(obj, prop) {

  if (obj.hasOwnProperty(prop)){
    delete obj[prop];
    return true
  } else  {
      return false;
  }
}
