import React from "react";
import classes from "./FormControls.module.css"


export const FormController = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return (<div className={classes.formControls + " " + (hasError ? classes.error : "")}>

        <div>
            {props.children}
        </div>
        {hasError && <span>{meta.error}</span>}

    </div>)
}


export const Textarea = (props) => {

    const {input, meta, ...restProps} = props

    return <FormController {...props}><textarea {...input} {...restProps}/></FormController>



}

export const Input = (props) => {

    const {input, meta, ...restProps} = props

    return <FormController {...props}><input {...input} {...restProps}/></FormController>
}