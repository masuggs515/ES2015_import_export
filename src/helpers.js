const choice = foods => {
    let randIdx = Math.floor(Math.random() * foods.length);
    return foods[randIdx];
}

const remove = (foods, food) => foods.filter(item => item !== food);


export { choice, remove }