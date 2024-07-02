function swapIndex(array: any[], form: number, to: number) {
  return array.splice(form, 1, array.splice(to, 1, array[form][0]))
}

export { swapIndex }
