import React from 'react'
import { useDispatch } from 'react-redux';
import { updateContentTask } from '../../../../store/Tasks/Reducer';
import TextEditor from '../../../TextEditor/TextEditor';

function ContentTask(props) {
  const { children, id } = props;
  const dispatch = useDispatch();
  const [readOnly, setReadOnly] = React.useState(true);
  const [newContent, setNewContent] = React.useState(children);


  const onContentChange = (value) => {
    setNewContent(value);
  }

  const saveContentHandle = () => {
    editContentHandle();
    dispatch(updateContentTask({ content: newContent, taskId: id }));
  }

  const editContentHandle = () => {
    setNewContent(children);
    setReadOnly(!readOnly);
  }
  return (
    <>
      <h6 className="title mb-2">Mô tả công việc</h6>
      {readOnly ? (
        <div onClick={editContentHandle}>
          <TextEditor value={children} readOnly={true} />
        </div>
      ) : (
        <>
          <TextEditor className="mb-3" value={newContent} onChange={onContentChange} />
          <div style={{ "height": "8px" }}></div>
          <ul className="align-center flex-wrap flex-sm-nowrap gx-3">
            <li className="order-md-last">
              <a href="#" className="btn btn-light" onClick={editContentHandle}>Cancel</a>
            </li>
            <li>
              <a href="#" className="btn btn-primary" onClick={saveContentHandle}>Save</a>
            </li>
          </ul>
        </>
      )}
    </>
  )
}

export default ContentTask