import React from 'react'
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import parse from 'html-react-parser';
import { updateContentTask } from '../../../../store/Tasks/Reducer';
import TextEditor from '../../../TextEditor/TextEditor';
import Skeleton from 'react-loading-skeleton';

function ContentTask(props) {
  const { activity, isLoading } = props;


  const transformText = useCallback((text) => {
    if (text === undefined) return "";
    let newText = text.replace("<ul", '<ul class="list list-sm list-checked"');
    newText = newText.replaceAll("h2>", 'h4>');
    return parse(newText);
  }, [activity]);

  return (
    <div>
      <div className="nk-msg-head-meta">
        <h4 className="title mb-2 text-info">
          <em class="icon ni ni-info mr-1" style={{ top: '2px', position: 'relative' }}></em>
          Mô tả công việc
        </h4>
        <ul className="nk-msg-actions">
          <li className="d-lg-none">
            <a href="#" className="btn btn-icon btn-sm btn-white btn-light profile-toggle">
              <em className="icon ni ni-info-i" />
            </a>
          </li>
          <li className="dropdown">
            <a href="#" className="btn btn-icon btn-sm btn-white btn-light dropdown-toggle" data-toggle="dropdown">
              <em className="icon ni ni-more-h" />
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <ul className="link-list-opt no-bdr">
                <li>
                  <a href="#">
                    <em className="icon ni ni-archive" />
                    <span>Xóa công việc</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className='ml-2'>
        {isLoading ? <Skeleton count={5.5} /> : (
          activity && transformText(activity.content)
        )}
      </div>

      <div className="nk-msg-head-meta">
        <h4 className="title mb-2 text-info">
          <em class="icon ni ni-clipboad-check mr-1" style={{ top: '2px', position: 'relative' }}></em>
          Bài nộp của các nhóm
        </h4>
      </div>
      <div className='ml-2'>

      </div>
    </div>
  )
}

export default ContentTask