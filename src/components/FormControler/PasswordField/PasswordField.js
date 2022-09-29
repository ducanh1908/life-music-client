import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { FormHelperText } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import PropTypes from "prop-types";
import * as React from "react";
import { useState } from "react";
import { Controller } from "react-hook-form";

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function PasswordField(props) {
  const { form, name, label, disabled } = props;
  const {
    formState: { errors },
  } = form;
  const hasError = !!errors[name];
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(pass => !pass);
  };
  return (
    <>
      
      <FormControl error={!!hasError} sx={{ m: 1, width: '30%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <Controller 
            name={name}
            control={form.control}
            render = {({ field})=> (
                <OutlinedInput
                    {...field}
                    type={showPassword ? 'text' : 'password'}
                    label={label}
                    disabled={disabled}
                    errors= {!!hasError}
                    endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                />         
            )}
            />     
        </FormControl>
      <FormHelperText error={!!hasError}>
        {errors[name]?.message}
      </FormHelperText>
    </>
  );
}

export default PasswordField;
