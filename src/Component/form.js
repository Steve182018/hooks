import React, { useState } from 'react';

const Form = () => {
    const [form_data,setForm_data] = useState({
        name: "",
        lname: "",
        pw: ""
    })

    return (
        <>
            <input type="text" placeholder="Enter your name" value={form_data.name} onChange={(e) => setForm_data({...form_data,name:e.target.value})} /><br />
            <input type="text" placeholder="Enter your last name" value={form_data.lname} onChange={(e) => setForm_data({...form_data,lname:e.target.value})} /><br />
            <input type="text" placeholder="Enter your email" value={form_data.email} onChange={(e) => setForm_data({...form_data,email:e.target.value})} />
            <p>{form_data.name}, {form_data.lname}, {form_data.email}</p>
            <button onClick={()=>setForm_data("")}>Reset</button>
        </>
    );
}

export default Form;
