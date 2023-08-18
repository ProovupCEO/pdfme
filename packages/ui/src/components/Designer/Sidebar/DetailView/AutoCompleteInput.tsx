import React, { useEffect, useRef, useState } from 'react';
import { SchemaForUI } from '@pdfme/common';

type AutoCompleteInputProps = {
  activeSchema: SchemaForUI;
  value: string;
  optionsInput: any;
  changeSchemas: (objs: { key: string; value: string; schemaId: string }[]) => void;
};

const AutoCompleteInput = ({
  value,
  activeSchema,
  changeSchemas,
  optionsInput,
}: AutoCompleteInputProps) => {
  const [inputValue, setInputValue] = useState(value ?? '');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const newRoles = optionsInput.contractRoles;
    console.log('Contract roles', newRoles);
    if (inputValue === '') {
      setSuggestions(newRoles);
      return;
    }
    const filteredSuggestions = newRoles.filter(
      (role: string) =>
        role.toLowerCase().includes(inputValue.toLowerCase()) && role.toLowerCase() !== value
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
    changeSchemas([{ key: 'roleId', value: inputValue, schemaId: activeSchema.id }]);
    const newRoles = optionsInput.contractRoles;
    console.log('check update', newRoles);
    setSuggestions(newRoles);
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
        <label style={{ marginBottom: 5 }}>Signataire</label>
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
            {inputValue && inputValue !== value && (
              <li
                onClick={handleAddNewRole}
                style={{
                  padding: '8px',
                  cursor: 'pointer',
                  backgroundColor: '#f7f7f7',
                  fontWeight: 'bold',
                }}
              >
                Ajouter {inputValue} comme nouveau rôle
              </li>
            )}
          </ul>
        )}
      </div>
    </>
  );
};

export default AutoCompleteInput;
