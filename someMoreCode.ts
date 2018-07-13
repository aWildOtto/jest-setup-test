//typescript version of the same functions
export class UsefulFunctions {
    a:number;
    public shuffle(a: number[]):number[] {
        for (let i = a.length - 1; i > 0; i --) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    public reverse(a: number[]):number[] {
        let tempA = [];
        for (let i = a.length - 1; i >= 0; i --) {
            tempA.push(a[i]);
        }
        return tempA;
    }
    public asyncFunc(): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(1);
            }, 1000);
        });
    }
    public getMocked(mockFn: Function, num: number): void{
        mockFn(num);

        this.a = 1;
        let b = this.a;
        b = 2;
        console.log(this.a);
    }
}
