import { FormHelperText, TextField } from '@mui/material';
import React from 'react'
import {Controller} from 'react-hook-form'
const InputField = (props) => {
    const {form, name, label, disabled} = props;
    const {formState:{errors}} = form;
    const hasError = errors[name];
  return (
  
      <>
      <Controller
        name={name}
        control={form.control}
        render = {({field}) => {
            <TextField
            {...field}
            fullWidth
            label={label}
            disabled={disabled}
            />
        }
        }
        />
        <FormHelperText errors ={!!hasError}>
        {errors[name]?.message}
        </FormHelperText>
      </>
  )
}

export default InputField