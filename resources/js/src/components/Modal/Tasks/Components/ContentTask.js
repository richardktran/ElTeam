import React from 'react'
import TextEditor from '../../../TextEditor/TextEditor';

function ContentTask(props) {
  const { children } = props;
  const [readOnly, setReadOnly] = React.useState(true);


  const onContentChange = (value) => {
    console.log('Change' + value);
  }

  const editContentHandle = () => {
    setReadOnly(!readOnly);
  }
  return (
    <>
      {readOnly ? (
        <div onClick={editContentHandle}>
          <TextEditor value={children} readOnly={true} />
        </div>
      ) : (
        <>
          <TextEditor className="mb-3" value={children} onChange={onContentChange} />
          <div style={{ "height": "8px" }}></div>
          <ul className="align-center flex-wrap flex-sm-nowrap gx-3">
            <li className="order-md-last">
              <a href="#" className="btn btn-light" onClick={editContentHandle}>Cancel</a>
            </li>
            <li>
              <a href="#" className="btn btn-primary" onClick={editContentHandle}>Save</a>
            </li>
          </ul>
        </>
      )}
    </>
  )
}

export default ContentTask