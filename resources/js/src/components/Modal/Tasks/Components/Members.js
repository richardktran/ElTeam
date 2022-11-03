import React from 'react'
import Avatar from '../../../Avatar/Avatar'
import OptionDialog from '../../../Dialog/OptionDialog';
function Members(props) {
  const { assignees } = props;
  const emails = ['username@gmail.com', 'user02@gmail.com'];
  const [members, setMembers] = React.useState([]);
  const [openMemberList, setOpenMemberList] = React.useState(false);
  const [selectedMember, setSelectedMember] = React.useState(emails[1]);


  React.useEffect(() => {
    setMembers(assignees);
  }, [assignees]);

  const handleClickOpenMembersList = () => {
    setOpenMemberList(true);
  };

  const handleCloseMembersList = (value) => {
    setOpenMemberList(false);
    // setSelectedMember(value);
  };


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
          <a href="#" onClick={handleClickOpenMembersList} class="dropdown-toggle" data-toggle="dropdown">
            <div class="user-avatar sm bg-light">
              <span>
                <em class="icon ni ni-plus"></em>
              </span>
            </div>
          </a>
        </li>
      </ul>
      <OptionDialog
        selectedValue={selectedMember}
        open={openMemberList}
        onClose={handleCloseMembersList}
      />
    </div>
  )
}

export default Members