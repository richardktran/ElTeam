import React from 'react'

function LinkType(props) {
  const { id, content, name, isOwner } = props;
  return (
    <div {...props}>
      <a href={content}>
        <img src="https://elearning.ctu.edu.vn/theme/image.php/lambda/url/1662695177/icon" className="mr-2" alt="" role="presentation" aria-hidden="true" />
        <span className="instancename">
          {name}
        </span>
      </a>
    </div>
  )
}

export default LinkType