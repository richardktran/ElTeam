import React from 'react'

function LinkType(props) {
  const { id, content, name, isOwner } = props;
  return (
    <div {...props}>
      <a href={content}>
        <img src="https://elteam.s3.ap-southeast-1.amazonaws.com/icons/movie_icon.svg" style={{ width: "37px", height: "37px" }} className="mr-1" alt="" role="presentation" aria-hidden="true" />
        <span className="instancename">
          {name}
        </span>
      </a>
    </div>
  )
}

export default LinkType