import React from 'react'

function FileType(props) {
  const { id, content, name, isOwner, type } = props;
  return (
    <div {...props}>
      <a href='#'>
        <img src={`https://elteam.s3.ap-southeast-1.amazonaws.com/icons/${type}_icon.svg`} style={{ width: "30px", height: "30px" }} className="mr-2" alt="" role="presentation" aria-hidden="true" />
        <span className="instancename">
          {name}
        </span>
      </a>
    </div>
  )
}

export default FileType