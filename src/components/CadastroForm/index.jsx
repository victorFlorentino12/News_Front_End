"use client"
import { useState } from "react";

const CadastroForm = ()=>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log(name)
    const AllSubmit = (e)=>{
        
        e.preventDefault();
        console.log('submit');
        
    }
    const changeValues = (e)=>{
        const {name, value} = e.target;

       if(name === 'name'){
        setName(value);
        return
       }else if(name === 'email'){
        setEmail(value);
        return
       }else if(name ==='password'){
        setPassword(value);
        return
       }else{
        return
       }
    }   
    return(
        <form onSubmit={AllSubmit}>
            <div>
                <label htmlFor="name">Nome</label>
                <input type="text" name="name" onChange={changeValues} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" onChange={changeValues} />
            </div>
            <div>
                <label htmlFor="password">Senha</label>
                <input type="password" name="password" onChange={changeValues} />
            </div>
            <button type="submit">Enviar</button>
        </form>
    )
}
export default CadastroForm;