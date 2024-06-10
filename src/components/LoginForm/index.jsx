"use client"

const { useState } = require("react")

const LoginForm = ()=>{
    const [form, setForm] = useState({
        email:'',
        password:''
    });
    console.log(form)
    const allSubmit = (e)=>{
        e.preventDefault();
    }
    const ChangeValues = (e) =>{
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]:value
        })
    }

    return(
        <form onSubmit={allSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" onChange={ChangeValues}/>
            </div>
            <div>
                <label htmlFor="password">Senha</label>
                <input type="password" name="password" onChange={ChangeValues}/>
            </div>
            <button type="submit">Entrar</button>
        </form>
    )
}
export default LoginForm;