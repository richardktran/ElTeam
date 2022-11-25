import React from 'react'
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import parse from 'html-react-parser';
import { updateContentTask } from '../../../../store/Tasks/Reducer';
import TextEditor from '../../../TextEditor/TextEditor';
import Skeleton from 'react-loading-skeleton';

function ContentTask(props) {
  const { children, id, isLoading } = props;
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

  const transformText = useCallback((text) => {
    if (text === undefined) return "";
    let newText = text.replace("<ul", '<ul class="list list-sm list-checked"');
    newText = newText.replaceAll("h2>", 'h4>');
    return parse(newText);
  }, [children]);

  return (
    <>
      <h6 className="title mb-2">
        Mô tả công việc
        <span className="ml-2">
          <a onClick={editContentHandle}>
            <em class="icon ni ni-edit-fill text-primary"></em>
          </a>
        </span>
      </h6>
      {readOnly ? (
        <div>
          {isLoading ? <Skeleton count={5.5} /> : transformText(children)}
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