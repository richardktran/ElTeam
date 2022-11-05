import React from 'react'
import Avatar from '../../../Avatar/Avatar'
import { Popover, Typography } from '@mui/material';
import { Select } from 'antd';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { updateAssignees } from '../../../../store/Tasks/Reducer';


function Members(props) {
  const dispatch = useDispatch();
  const { assignees, members } = props;
  const [assigneesList, setAssigneesList] = React.useState(null);
  const [membersList, setMembersList] = React.useState(members);


  React.useEffect(() => {
    setAssigneesList(assignees);
  }, [assignees]);

  const toggleAssign = (member) => {
    if (assigneesList.find(assignee => assignee.id === member.id)) {
      setAssigneesList(assigneesList.filter((item) => item.id !== member.id));
    } else {
      setAssigneesList([...assigneesList, member]);
    }
  }

  useEffect(() => {
    if (assigneesList !== null) {
      dispatch(updateAssignees({ taskId: props.id, assignees: assigneesList }));
    }
  }, [assigneesList]);

  const isAssignee = useCallback((id) => {
    return assigneesList.find(assignee => assignee.id === id);
  }, [assigneesList]);

  useEffect(() => {
    setMembersList(members);
  }, [assigneesList])

  return (
    <div className="card-title ">
      <p className="title mb-2" style={{ fontSize: "14px", color: "#5e6c84" }}>Người thực hiện</p>
      <ul class="project-users g-1">
        {assigneesList && assigneesList.map((assignee, index) => (
          <li>
            <Avatar image={assignee.avatar} name={assignee.name} />
          </li>
        ))}
        <li>

          <div class="dropdown">
            <a href="#" class="dropdown-toggle" type="button" data-toggle="dropdown">
              <div class="user-avatar sm bg-light">
                <span>
                  <em class="icon ni ni-plus"></em>
                </span>
              </div>
            </a>
            <div class="dropdown-menu" style={{ minWidth: "200px" }}>
              <div class="dropdown-head">
                <span class="sub-title nk-dropdown-title">Chọn thành viên</span>
              </div>
              <ul class="link-check">
                {assigneesList && membersList && membersList.map((member, index) => {
                  return (
                    <li class={`chat-item ${isAssignee(member.id) ? 'active' : ''}`} onClick={() => toggleAssign(member)}>
                      <a class="chat-link" href="#">
                        <Avatar image={member.avatar} name={member.name} />
                        <div class="chat-info ml-2">
                          <div class="chat-from">
                            <div class="name">{member.name}</div>
                          </div>
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </li >
      </ul >

    </div >
  )
}

export default Members