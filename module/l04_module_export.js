//l04_module_export
export function sum(a,b,c){
    return a+b+c;
}
export const username="경민";

export class User{
    constructor(name,age) {
        this.name=name;
        this.age=age;
    }
}