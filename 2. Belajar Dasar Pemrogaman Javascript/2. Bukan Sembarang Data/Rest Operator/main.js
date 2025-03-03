// Parameter Menggunakan rest Operator
// Rest Argument memungkin kan kita menulis argumen yang tak terbatas
function myFunc (...Args) {
    console.log(Args.length)
    console.log('Args', Args)
}

myFunc('one', 'two', 'three')
myFunc('one', 'two', 'three', 'four', 'five', 'six')