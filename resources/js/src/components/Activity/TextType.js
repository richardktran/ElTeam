import React, { useState } from 'react'
import parse from 'html-react-parser';
import { useEffect } from 'react';

function TextType(props) {
  const { id, content, isOwner } = props;
  const [contentData, setContentData] = useState(content);

  useEffect(() => {
    setContentData(content);
  }, [content]);

  const transformText = (text) => {
    let newText = text.replace("<ul", '<ul class="list list-sm list-checked"');
    newText = newText.replaceAll("h2>", 'h4>');
    return parse(newText);
  }
  return (
    <div {...props}>
      <div className='mb-2'>
        {transformText(contentData)}
      </div>
    </div>
  )
}

export default TextType