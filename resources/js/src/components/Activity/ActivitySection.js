import React from 'react'
import DragHandleIcon from '../../images/draggable.svg';
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
          icon='https://elteam.s3.ap-southeast-1.amazonaws.com/icons/link_icon.svg'
          id={activity.id}
          content={activity.content}
          name={activity.name}
          isOwner={isOwner}
        />
      );
    default:
      return (
        <LinkType
          id={activity.id}
          content={activity.content}
          name={activity.name}
          isOwner={isOwner}
        />
      );
  }
}

export default ActivitySection