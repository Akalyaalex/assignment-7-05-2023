function alphaCountry() {
    const alphaChar = 'ABCDEFGHIJKLMNOPQRSTUVEWXYZ'
    const finalObj = [];
    let alphaIndexer = 0;

    while (alphaIndexer !== alphaChar.length) {
    const startsWith = countries.filter((obj) => obj.name.startsWith(alphaChar[alphaIndexer]))
    finalObj.push({'letter': alphaChar[alphaIndexer], 'count': startsWith.length + ' times'})
    alphaIndexer++
  }

  return finalObj;
}