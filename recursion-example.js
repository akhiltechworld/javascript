
/* Usage of recursice function */

let company = { // the same object, compressed for brevity
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

function sumOfSalaries(dept){
	if (Array.isArray(dept)){
    	return dept.reduce((prev, current) => prev + current.salary, 0)
    }else{
    let sum = 0;
    for (let subDept of Object.values(dept)){
    	sum += sumOfSalaries(subDept);
    }
        return sum;
    }

};

alert(sum);