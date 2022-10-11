import React from 'react'

function ContentBlock(props) {
  const { pageId, html, tag } = props;
  const CustomTag = tag;
  return (
    <CustomTag>{html}</CustomTag>
  )
}

export default ContentBlock