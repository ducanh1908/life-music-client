import React from "react";
import PropTypes from "prop-types";
import { alpha, styled } from "@mui/material/styles";
import { Controller } from 'react-hook-form';

import { TextField, FormHelperText} from '@mui/material';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};
const ValidationTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    backgroundColor: "white",
    // borderColor: "white",
    border: "1px solid white",
  },
  "& input:valid + fieldset": {
    borderColor: "white",
    borderWidth: 2
  },
  "& input:invalid + fieldset": {
    borderColor: "white !important",
    borderWidth: 2
  },
  "& input:valid:focus + fieldset": {
    color:"white",
    borderLeftWidth: 6,
    padding: "4px !important" // override inline-style
  }
});
function InputField(props) {
  const { form, name, label, disabled } = props;
  const {
    formState: { errors },
  } = form;
  const hasError = errors[name];

  return (
    <>
      <Controller
        name={name}
        control={form.control}
        render = {({ field})=> (
           
            <ValidationTextField
                {...field}
                
                sx ={{marginTop:1, width: '100%'}}
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
