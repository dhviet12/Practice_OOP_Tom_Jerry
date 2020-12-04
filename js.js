function Cat(name,weight,speed,life){
    this.name= name;
    this.weight=weight;
    this.speed=speed;
    this.life = true;
    this.sound=function(str){
        return str;
    }
    this.catch=function (object){
        if(this.speed> object.speed){
            return true;
        } else
            return false;
    }
    this.eat=function (object){
        if(object.life){
            this.weight+= object.weight;
            return object.life=false;
        } else
            console.log('chuot da chet khong the an');

    }
}
function Mouse(name,weight,speed,life){
    this.name=name;
    this.weight=weight;
    this.speed=speed;
    this.life=true;
    this.sound=function(str){
        return str;
    }
}
let mouse = new Mouse('Jerry',5,5);
let mouse2= new Mouse('Mouse',10,11)
let cat = new Cat('Tom',5,10);
console.log('Meo keu: ' + cat.sound('meo meo'));
console.log('Meo duoi bat chuot ' + cat.catch(mouse));
console.log('Chuot keu: ' + mouse.sound('chit chit'));
cat.eat(mouse);
console.log('Trong luong cua meo: ' + cat.weight);
console.log('Chuot da chet ' + mouse.life);
console.log(cat.eat(mouse2));