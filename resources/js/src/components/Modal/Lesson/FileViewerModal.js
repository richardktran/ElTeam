import React, { useEffect } from 'react'
import ReactPlayer from 'react-player';
import BaseModal from '../BaseModal'

function FileViewerModal(props) {
  const { isShow, modalName, url, handleCloseModal } = props
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const [content, setContent] = React.useState(null);

  useEffect(() => {
    console.log(url);
    if (url === null) {
      forceUpdate();
    }
    setContent(url);
  }, [url])

  const checkIncludes = (name, types) => {
    let result = false;
    types.forEach(type => {
      if (name.includes(type)) {
        result = true;
      }
    })
    return result;
  }

  const getTypes = (name) => {
    if (name === null) return;
    const ext = getExtension(name);
    if (checkIncludes(ext, ['pdf'])) {
      return 'pdf';
    }
    if (checkIncludes(ext, ['doc', 'docx'])) {
      return 'doc';
    }
    if (checkIncludes(ext, ['xls', 'xlsx'])) {
      return 'xls';
    }
    if (checkIncludes(ext, ['mp4', 'avi', 'mov', 'wmv'])) {
      return 'movie';
    }
    if (checkIncludes(ext, ['mp3', 'wav', 'wma'])) {
      return 'audio';
    }

    return 'text';
  }

  const getExtension = (filename) => {
    return filename.split('.').pop();
  }

  return (
    <BaseModal modalName={modalName} handleCloseModal={handleCloseModal} isShow={isShow} modalSize='xl' >
      {(getTypes(content) !== 'movie' && getTypes(content) !== 'audio') && content !== null &&
        <iframe id="file" src={`https://docs.google.com/viewer?url=${content}&embedded=true`} style={{ width: '100%', height: '500px' }} frameBorder={0} />
      }
      {(getTypes(content) === 'movie' || getTypes(url) === 'audio') &&
        <ReactPlayer url={content} width="100%" height="500px" playing={true} controls={true} />
      }
    </BaseModal>
  )
}

export default FileViewerModal