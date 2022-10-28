import './kanbanCard.scss'

const KanbanCard = props => {
  return (
    <div className="kanban-item">
      <div className="kanban-item-title">
        <h6 className="title">{props.children}</h6>
        <div className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">
            <div className="user-avatar-group">
              <div className="user-avatar xs bg-primary"><span>A</span></div>
            </div>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <ul className="link-list-opt no-bdr p-3 g-2">
              <li>
                <div className="user-card">
                  <div className="user-avatar sm bg-primary">
                    <span>AB</span>
                  </div>
                  <div className="user-name">
                    <span className="tb-lead">Abu Bin Ishtiyak</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="kanban-item-text">
        <p>Update the new UI design for @dashlite template with based on feedback.</p>
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

export default KanbanCard