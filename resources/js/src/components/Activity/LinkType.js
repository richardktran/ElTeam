import React from 'react'

function LinkType(props) {
  const { id, content, name, isOwner, icon } = props;
  return (
    <div {...props}>
      <a href={content}>
        <img src={icon ?? "https://elteam.s3.ap-southeast-1.amazonaws.com/icons/doc_icon.svg"} style={{ width: "30px", height: "30px" }} className="mr-2" alt="" role="presentation" aria-hidden="true" />
        <span className="instancename">
          {name}
        </span>
      </a>
    </div>
  )
}

export default LinkType