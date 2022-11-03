import React from 'react'
import Avatar from '../../../Avatar/Avatar'

function Members(props) {
  const { assignees } = props;
  const [members, setMembers] = React.useState([]);

  React.useEffect(() => {
    setMembers(assignees);
  }, [assignees]);


  return (
    <div className="card-title ">
      <p className="title mb-2" style={{ fontSize: "14px", color: "#5e6c84" }}>Người thực hiện</p>
      <ul class="project-users g-1">
        {members && members.map((assignee, index) => (
          <li>
            <Avatar image={assignee.avatar} name={assignee.name} />
          </li>
        ))}
        <li>
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <div class="user-avatar sm bg-light">
              <span>
                <em class="icon ni ni-plus"></em>
              </span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Members