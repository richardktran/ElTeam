import React from 'react'

function ContentBlock(props) {
  const { pageId, html, tag } = props;
  const CustomTag = (html) => {
    const Tag = tag;
    switch (tag) {
      case 'divider':
        return <hr style={{ border: '1px solid rgba(55, 53, 47, 0.16)' }} />;
      default:
        return <Tag>{html}</Tag>;
    }
  };
  return CustomTag(html);
}

export default ContentBlock