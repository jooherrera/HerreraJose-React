import React from 'react'

const styles={
  container:{
    backgroundColor:"rgba(196, 196, 196, 1)"
  },
  
  h1 :{
    fontSize:30,
    color:"red"
  }

}

function ItemListContainer({greeting}) {
  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>Hola {greeting}!!</h1>
    </div>
  )
}

export default ItemListContainer
