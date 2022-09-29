import React from 'react';
import PropTypes from 'prop-types';

import { Controller } from 'react-hook-form';

import { TextField, FormHelperText} from '@mui/material';

InputField.propTypes = {
    form : PropTypes.object.isRequired,
    name : PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled : PropTypes.bool
};

function InputField(props) {

    const { form, name, label, disabled } = props;
    const {formState : {errors}} = form;
    const hasError = errors[name]

    return (
        <>  
        <Controller 
        name={name}
        control={form.control}
        render = {({ field})=> (
           
            <TextField
                {...field}
                sx ={{ width :"30%", m:1}}
                label={label}
                disabled={disabled}
                errors= {!!hasError}
            />         
        )}
        />     
            <FormHelperText error={!!hasError}>
                {errors[name]?.message}
            </FormHelperText>
        </>
      
        
    );
}

export default InputField;