module.exports = {
    shuffle: (a) => {
        for (let i = a.length - 1; i > 0; i --) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    },
    reverse: (a) => {
        let tempA = [];
        for (let i = a.length - 1; i >= 0; i --) {
            tempA.push(a[i]);
        }
        return tempA;
    },
    asyncFunc: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(1);
            }, 1000);
        });
    },
    findtheOne:(a) => {
        for(let i = 0; i < a.length; i ++){
            if(a[i] === 1){
                return i;
            }
        }
        return -1;
    }
}
// npm i --save-dev jest-nyan-reporter
// "jest": {
//     "reporters": [
//         ["jest-nyan-reporter", {
//           "suppressErrorReporter": false
//         }]
//       ]
//     },