
import React, { useMemo, useRef, useState } from 'react'
import { Overlay, OverlayTrigger, Popover } from 'react-bootstrap';


function Avatar(props) {
  const { image = null, name = '', email = '', size = 'sm' } = props;
  const target = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const colors = [
    'bg-primary',
    'bg-secondary',
    'bg-warning',
    'bg-danger',
    'bg-success',
    'bg-info',
    'bg-azure',
    'bg-blue',
    'bg-pink',
    'bg-indigo',
    'bg-dark',
    'bg-orange',
    'bg-purple',
    'bg-teal',
  ]

  //Get random color
  const randomColor = React.useCallback(() => {
    let number = 0;
    if (name !== '' && name !== null) {
      number = name.split('').reduce((acc, char) => {
        return acc + char.charCodeAt(0)
      }, 0);
    } else {
      number = email.split('').reduce((acc, char) => {
        return acc + char.charCodeAt(0)
      }, 0);
    }


    return colors[(number % colors.length)];
  }, [name, email]);

  const getNameLabel = React.useMemo(() => {
    return () => {
      if (name !== '' && name !== null) {
        const lastName = name.split(' ').pop();
        //Get first name 
        const firstName = name.split(' ').shift();
        const firstLetter = lastName.charAt(0).toUpperCase();
        return (firstName.charAt(0).toUpperCase() + firstLetter).toUpperCase();
      }
      console.log(email);
      return email[0].toUpperCase() + email[1].toUpperCase();
    }
  }, [name, email]);

  const getEmailLabel = React.useMemo(() => {
    return () => {
      if (email) {
        return email.charAt(0).toUpperCase();
      }
      return '';
    }
  }, [email]);

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <div ref={target} onMouseEnter={() => setShowPopup(true)} onMouseLeave={() => {
        setTimeout(() => {
          setShowPopup(false);
        }, 500);
      }}>
        {image ? (
          <div class={`user-avatar ${size} bg-blue`}>
            <img src={image} alt="" referrerpolicy="no-referrer" />
          </div>
        ) : (
          <div class={`user-avatar ${size} ${randomColor()}`}>
            <span>
              {getNameLabel() ?? getEmailLabel()}
            </span>
          </div>
        )}
      </div>

      <Overlay
        show={showPopup || isHovered}
        target={target.current}
      >
        <Popover id="popover-basic" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <Popover.Body>
            <div className="card">
              <a className="user-card" onClick={() => openInNewTab(`/`)}>
                {image ? (
                  <div class={`user-avatar sm bg-blue`}>
                    <img src={image} alt="" referrerpolicy="no-referrer" />
                  </div>
                ) : (
                  <div class={`user-avatar sm ${randomColor()}`}>
                    <span>
                      {getNameLabel() ?? getEmailLabel()}
                    </span>
                  </div>
                )}
                <div className="user-info">
                  <span className="lead-text">{name}</span>
                  <span className="sub-text">{email}</span>
                </div>
              </a>
            </div>
          </Popover.Body>
        </Popover>
      </Overlay>
    </>

  )
}

export default Avatar