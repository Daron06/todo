for (let i = 0; i < 8; i++) {
  switch (i) {
    case i < 3:
      console.log('да');
      break;
    case i == 3:
      console.log('это Кавказ');
      break;
    case i >= 3 && i < 7:
      console.log('да');
      break;
    default:
      console.log('солнечный край');
  }
}
