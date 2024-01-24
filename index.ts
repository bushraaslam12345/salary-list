/ oop ( object oriented programming )

// class 
// syntax

// class classname {}

// teacher salary class 

class teacher_salary_list {
    name: string;
    age : number;
    qualification: string;
    experience : number ;
    salary : number ;

    constructor (name :string,age:number,qualification:string,experience:number,salary:number){
        this.name =name;
        this.age=age;
        this.qualification= qualification;
        this.experience= experience;
        this.salary=salary;
    
    }

      //methods
      salary1 (){
        console.log("reached in bank account on every 1 of month")
    }
     recieved(){
        console.log("salary recivved by staff")
    }
}


const tsl1= new teacher_salary_list("MS shahida",45,"phd",14,25000);
const tsl2=new teacher_salary_list("ms abida",50,"m.phil",12,20000);
const tsl3=new teacher_salary_list( "ms shazia",58,"ma islamiyat",32,40000);
console.log(tsl2);
