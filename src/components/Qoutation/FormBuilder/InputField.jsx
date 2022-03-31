import {React} from "react";
import { Form, FloatingLabel } from "react-bootstrap";
import ReactFlagsSelect from 'react-flags-select';
import countries from './CountryList';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import 'react-phone-input-2/lib/bootstrap.css';

import "./style.css";

function InputField(props) {
  const {  value, label, name, placeholder, type, isRequired, selectOptions=[], handleInputChange } =
    props;

  const TextInput = () => {
    return (
      <>
        <FloatingLabel label={<div>{label} {isRequired === true && <span style={{color: "red"}}>*</span>} </div>} controlId="floatingInput">
          <Form.Control type="text" placeholder={label} value={value} onChange={(e)=> {handleInputChange(name, e.target.value)}} required={isRequired} />
        </FloatingLabel>
      </>
    );
  }

  const EmailInput = () => {
    return (
      <>
        <FloatingLabel label={<div>{label} {isRequired === true && <span style={{color: "red"}}>*</span>} </div>} controlId="floatingInput">
          <Form.Control type="email" placeholder={label} value={value} onChange={(e)=> {handleInputChange(name, e.target.value)}} required={isRequired} />
        </FloatingLabel>
      </>
    );
  }

  const PhoneNumberInput = () => {
    return (
      <>
        <PhoneInput enableSearch value={value} placeholder="Phone Number" inputStyle={{
          paddingTop: "1.75rem",
          paddingBottom: "1.75rem",
          width: "100%"
        }}
        onChange={(phone, country, e, formattedValue) => handleInputChange(name, phone, country, e, formattedValue)} required={isRequired}
        />
      </>
    );
  }

  const SelectInput = () => {
    return (
      <>
        <Form.Select
          aria-label="Floating label select example"
          className="select" value={value} onChange={(e)=> {handleInputChange(name, e.target.value)}}  required={isRequired}
        >
          <option value="" selected hidden>
            {label}
          </option>

          {selectOptions.map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </Form.Select>
      </>
    );
  }

  const SelectCountry = () => {
    return (
      <>
        <ReactFlagsSelect searchable placeholder={label} className="select-country" selected={value} onSelect={(code) => {handleInputChange(name, code, countries[code])}} required={isRequired} />
      </>
    );
  }

  const NumberInput = () => {
    return (
      <>
        <FloatingLabel label={<div>{label} {isRequired === true && <span style={{color: "red"}}>*</span>} </div>} controlId="floatingInput">
          <Form.Control type="number" placeholder={label} value={value} onChange={(e)=> {handleInputChange(name, e.target.value)}} required={isRequired} />
        </FloatingLabel>
      </>
    );
  }

  const UploadFileInput = () => {
    return (
      <>
        <input type="file" className="upload-input" onChange={(e) => {handleInputChange(name, e.target.files[0])}} />
      </>
    );
  }

  const Field = () => {
    if (type === "text") {
      return TextInput();
    } else if (type === "email") {
      return EmailInput();
    } else if (type === "tel") {
      return PhoneNumberInput();
    } else if (type === "select") {
      return SelectInput();
    } else if (type === "number") {
      return NumberInput();
    } else if(type === "file") {
      return UploadFileInput();
    } else if(type === "selectCountry") {
      return SelectCountry();
    }

    return TextInput();
  }

  return (
    <div className="input-wrapper">
      {Field()}
    </div>
  );
}

export default InputField;
