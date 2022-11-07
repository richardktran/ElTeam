import React from 'react'

function Loading() {
  return (
    <div className='loading' style={styles.container}>
    </div>
  )
}

const styles = {
  container: {
    backgroundImage: `url('/assets/images/loading.gif')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    zIndex: 999999,
    position: 'fixed',
  }
};

export default Loading