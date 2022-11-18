import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { cutStringShorter } from "../../utils/stringUtils";
import Avatar from "../Avatar/Avatar";

const KanbanCard = props => {
  const { description, assignees } = props;
  const [content, setContent] = useState(description);
  const [assigneesList, setAssigneesList] = useState(assignees);

  useEffect(() => {
    function getText(html) {
      var divContainer = document.createElement("div");
      divContainer.innerHTML = html;
      return cutStringShorter(divContainer.textContent || divContainer.innerText || "", 100);
    }
    setContent(getText(description));
  }, [description]);

  useEffect(() => {
    setAssigneesList(assignees);
  }, [assignees]);


  return (
    <div className="kanban-item">
      <div className="kanban-item-title">
        <h6 className="title">{props.children}</h6>
        <div className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">
            <div className="user-avatar-group">
              {assigneesList && assigneesList.map((assignee, index) => (
                <Avatar image={assignee.avatar} name={assignee.name} size='xs' />
              ))}
            </div>
          </a>
        </div>
      </div>
      <div className="kanban-item-text">
        <p>{content}</p>
      </div>
      <ul className="kanban-item-tags">
        <li><span className="badge badge-info">Dashlite</span></li>
        <li><span className="badge badge-warning">UI Design</span></li>
      </ul>
      <div className="kanban-item-meta">
        <ul className="kanban-item-meta-list">
          <li className="text-danger"><em className="icon ni ni-calendar" /><span>2d Due</span></li>
          <li><em className="icon ni ni-notes" /><span>Design</span></li>
        </ul>
        <ul className="kanban-item-meta-list">
          <li><em className="icon ni ni-clip" /><span>1</span></li>
          <li><em className="icon ni ni-comments" /><span>4</span></li>
        </ul>
      </div>
    </div>

  )
}

const Loading = () => {
  return (
    <div className="kanban-item">
      <div className="kanban-item-title">
        <h6 className="title">
          <Skeleton width={200} />
        </h6>
        <div className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">
            <div className="user-avatar-group">
              <Skeleton circle={true} width={32} height={32} count={2} />
            </div>
          </a>
        </div>
      </div>
      <div className="kanban-item-text">
        <Skeleton count={3.5} />
      </div>
      <ul className="kanban-item-tags">
        <li><span className="badge badge-info">Dashlite</span></li>
        <li><span className="badge badge-warning">UI Design</span></li>
      </ul>
      <div className="kanban-item-meta">
        <ul className="kanban-item-meta-list">
          <li className="text-danger"><em className="icon ni ni-calendar" /><span>2d Due</span></li>
          <li><em className="icon ni ni-notes" /><span>Design</span></li>
        </ul>
        <ul className="kanban-item-meta-list">
          <Skeleton count={2} />
        </ul>
      </div>
    </div>
  )
}

KanbanCard.Loading = Loading;

export default KanbanCard