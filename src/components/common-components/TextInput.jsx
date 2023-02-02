import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import PropTypes from "prop-types";

function TextInput({ handleValueChange }) {
  const [searchInput, setSearchInput] = useState();

  function handleChange(e) {
    setSearchInput(e.target.value);
  }

  function handleClick() {
    handleValueChange(searchInput);
  }

  return (
    <div className="text-input__wrapper layout-spacing">
      <InputGroup className="mb-3 text-input">
        <Form.Control
          placeholder="Article title"
          aria-label="Article title"
          aria-describedby="basic-addon2"
          onChange={(e) => handleChange(e)}
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={handleClick}>
          Search
        </Button>
      </InputGroup>
    </div>
  );
}

TextInput.propTypes = {
    handleValueChange: PropTypes.func,
};

TextInput.defaultProps = {
    handleValueChange: () => {},
};

export { TextInput };
