import { TextField } from '@mui/material';
import React from 'react'
import { useEffect } from 'react';

function InlineEdit({ value, setValue, onSave }) {
  const [editingValue, setEditingValue] = React.useState(value);

  useEffect(() => {
    setEditingValue(value);
  }, [value]);

  const onChange = (event) => setEditingValue(event.target.value);

  const onKeyDown = (event) => {
    if (event.key === "Enter" || event.key === "Escape") {
      onSave(editingValue);
      event.target.blur();
    }
  };

  const onBlur = (event) => {
    if (event.target.value.trim() === "") {
      setEditingValue(value);
    } else {
      setValue(event.target.value);
      onSave(editingValue);
    }
  };

  return (
    <TextField
      value={editingValue}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      placeholder='Untitled'
      variant='outlined'
      fullWidth
      sx={{
        width: '100%',
        '& .MuiOutlinedInput-input': { padding: 0 },
        '& .MuiOutlinedInput-notchedOutline': { border: 'unset ' },
        '& .MuiOutlinedInput-root': { fontSize: '2.5rem', fontWeight: '700' },
        marginBottom: '10px'
      }}
    />
  );
}

export default InlineEdit
