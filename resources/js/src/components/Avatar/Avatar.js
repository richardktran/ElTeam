import React from 'react'

function Avatar(props) {
  const { image = null, name = '', email = '', size = 'sm' } = props;

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

  return (
    <>
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

    </>
  )
}

export default Avatar