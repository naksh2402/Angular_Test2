import {InmemoryDbService} from 'angular-in-memory-web-api';
import { Customer } from './component/CustomerForm/customer.service';

export class DataService implements InmemoryDbService{
    createDb(){
        const customers:Customer[]=[
            {id:1,name:"Naksh",email:"naksh@gmail.com",phone:"1234567890",address:"Mumbai"},
            {id:2,name:"Yash",email:"yash@gmail.com",phone:"8854555888",address:"NewDellhi"}, 
        ]
    return {customers};
    }   

    genId(customers:Customer[]):number{ 
        return customers.length > 0 ? Math.max(...customers.map(customer => customer.id)) + 1 : 1;
    }
}     
