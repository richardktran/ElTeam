// TextEditor.tsx
import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'code'],
    ['clean'],
  ],
};

const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'code',
];

const TextEditor = (props) => {
  const { value, onChange, placeholder, readOnly = false } = props;
  return (
    <>
      <ReactQuill
        theme={readOnly ? 'bubble' : 'snow'}
        value={value || ''}
        modules={modules}
        formats={formats}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
        style={{ height: "140px", marginBottom: "40px" }}
      />
    </>
  );
};

export default TextEditor;