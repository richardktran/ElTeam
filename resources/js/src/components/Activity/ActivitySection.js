import React from 'react'
import DragHandleIcon from '../../images/draggable.svg';
import FileType from './FileType';
import LinkType from './LinkType';
import TextType from './TextType';

function ActivitySection(props) {
  const { activity, isOwner } = props;
  return (
    <div {...props}>
      <BaseActivity activity={activity} isOwner={isOwner} />
    </div>
  );
}

const BaseActivity = ({ activity, isOwner }) => {
  switch (activity.type) {
    case 'text':
      return (
        <TextType
          id={activity.id}
          content={activity.content}
          isOwner={isOwner}
        />
      );
    case 'link':
      return (
        <LinkType
          id={activity.id}
          content={activity.content}
          name={activity.name}
          isOwner={isOwner}
        />
      );
    default:
      return (
        <FileType
          id={activity.id}
          content={activity.content}
          type={activity.type}
          name={activity.name}
          isOwner={isOwner}
        />
      );
  }
}

export default ActivitySection