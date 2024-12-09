import React, { useContext, useEffect, useRef, useState } from 'react';
import { SchemaForUI } from '@pdfme/common';
import { I18nContext } from '../../../../contexts';

type AutoCompleteInputProps = {
  activeSchema: SchemaForUI;
  schemas: SchemaForUI[];
  value: string;
  optionsInput: any;
  changeSchemas: (objs: { key: string; value: string; schemaId: string }[]) => void;
};

export const ErrorLabel = ({ isError, msg }: { isError: boolean; msg: string }) => (
  <span
    style={{ color: isError ? '#ffa19b' : 'inherit', fontWeight: isError ? 'bold' : 'inherit' }}
  >
    {msg}
  </span>
);
const AutoCompleteInput = ({
  value,
  activeSchema,
  changeSchemas,
  optionsInput,
  schemas,
}: AutoCompleteInputProps) => {
  const [inputValue, setInputValue] = useState(value ?? '');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const i18n = useContext(I18nContext);

  useEffect(() => {
    const newRoles = optionsInput.contractRoles;
    if (inputValue === '') {
      setSuggestions(newRoles);
      return;
    }
    const filteredSuggestions = newRoles.filter(
      (role: string) =>
        role.toLowerCase().includes(inputValue.toLowerCase()) &&
        role.toLowerCase() !== value.toLowerCase()
    );
    setSuggestions(filteredSuggestions);
  }, [inputValue, optionsInput.contractRoles?.length]);

  useEffect(() => {
    setInputValue(value ?? '');
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSuggestionClick = (suggestion: string) => {
    changeSchemas([{ key: 'roleId', value: suggestion, schemaId: activeSchema.id }]);
    setInputValue(suggestion);
    setSuggestions([]);
  };

  const handleAddNewRole = () => {
    console.log(optionsInput);
    const currentRoles = optionsInput.contractRoles;
    optionsInput.setContractRoles([...currentRoles, inputValue]);
    changeSchemas([{ key: 'roleId', value: inputValue.toLowerCase(), schemaId: activeSchema.id }]);
    const newRoles = optionsInput.contractRoles;
    const filteredSuggestions = newRoles.filter(
      (role: string) =>
        role.toLowerCase().includes(inputValue.toLowerCase()) &&
        role.toLowerCase() !== value.toLowerCase()
    );
    setSuggestions(filteredSuggestions);
  };

  const blankKey = !activeSchema.roleId;

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
        <label style={{ marginBottom: 5 }}>
          Role
          <u style={{ fontSize: '0.7rem', marginLeft: 2 }}>
            (<ErrorLabel msg={i18n('required')} isError={blankKey} />)
          </u>
        </label>
        <input
          ref={inputRef}
          onChange={handleInputChange}
          style={{
            width: '100%',
            border: '1px solid #767676',
            borderRadius: 2,
            color: '#333',
            background: 'none',
          }}
          value={inputValue}
        />
        {(suggestions.length > 0 || inputValue) && (
          <ul
            style={{
              margin: 0,
              padding: 0,
              width: '100%',
              listStyle: 'none',
              border: '1px solid #767676',
              borderRadius: 2,
              maxHeight: '150px',
              overflowY: 'auto',
            }}
          >
            {suggestions.map((suggestion) => (
              <li
                key={suggestion}
                onClick={() => handleSuggestionClick(suggestion)}
                style={{
                  padding: '8px',
                  cursor: 'pointer',
                  borderBottom: '1px solid #e0e0e0',
                  backgroundColor: '#fff',
                }}
              >
                {suggestion}
              </li>
            ))}
            {inputValue && inputValue.toLowerCase() !== value.toLowerCase() && (
              <li
                onClick={handleAddNewRole}
                style={{
                  padding: '8px',
                  cursor: 'pointer',
                  backgroundColor: '#f7f7f7',
                  fontWeight: 'bold',
                }}
              >
                Add new role: {inputValue}
              </li>
            )}
          </ul>
        )}
      </div>
    </>
  );
};

export default AutoCompleteInput;
