import React from "react";
import s from './FormsControls.module.css'


const FormsControl = ({input, meta, child, ...props})=>{
    const hasError = meta.error && meta.touched;
    return(
        <div>
            <div className={s.formControl +" "+ (hasError ? s.error:"" )}>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>

    )
}
//TODO:Как работает эта локальная обератка, и зачем все эти пропсы, как раьботает тут диструктурезация ?





export const Textarea = (props) =>{
    const {input, ...restProps}= props;
    return (
        <FormsControl {...props}><textarea {...input} {...restProps}/></FormsControl>
    )
}

//TODO:Почему_спан_не_краситься_в_красный_?


export const Input = (props) =>{
    const {input,  ...restProps}= props;
    return (
        <FormsControl {...props}><input {...input} {...restProps}/></FormsControl>
    )
}