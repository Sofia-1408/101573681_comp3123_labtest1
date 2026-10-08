const lowerCaseWords = (array) => {
    return new Promise((resolve, reject) => {
        const result = array
            .filter(item => typeof item === "string")
            .map(word => word.toLowerCase());
        resolve(result);
    });
};
const array = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(array).then(result => console.log(result)).catch(error => console.log({ error: error.message }));