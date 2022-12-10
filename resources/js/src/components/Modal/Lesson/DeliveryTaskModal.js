import React, { useEffect } from 'react'
import ReactPlayer from 'react-player';
import BaseModal from '../BaseModal'
import ContentTask from './Components/ContentTask';

function DeliveryTaskModal(props) {
  const { isShow, modalName, activity, handleCloseModal } = props
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const [content, setContent] = React.useState(null);


  return (
    <BaseModal modalName={modalName} handleCloseModal={handleCloseModal} isShow={isShow} modalSize='xl' >
      {/* Create modal contain activity content, deadline and groups to deliver */}

      <div className="modal-body" style={{ padding: 0 }}>
        <div className="nk-msg-body bg-white">
          <ContentTask
            activity={activity}
          />
        </div>
      </div>

    </BaseModal>
  )
}

export default DeliveryTaskModal