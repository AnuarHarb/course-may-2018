function ensure(value) {

if(value === undefined) {
    throw new Error('no arguments');
  }

  return value;
}
