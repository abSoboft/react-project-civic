import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const Contact = () => {
   const listOfIds =  useParams()
   const [params] =  useSearchParams()
   console.log('name: ', params.get('name'));
   console.log('listOfIds: ', listOfIds);
  return (
    <div>Contact</div>
  )
}

export default Contact