const sumar = (a, b) => a + b;

const restar = (a, b) => a - b;

const countToZero = () =>  {
    let i;
    for(i = 10; i >= 0; i--){
        i;
    }
    return i;
}

module.exports = {
    sumar,
    restar,
    countToZero
};