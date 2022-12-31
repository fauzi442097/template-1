import Head from 'next/head'
import React from 'react'

const TagHead = ({ title } : {
   title?: string
}) => {
  return (
    <Head>
      <title>{ title ? title : 'Administrator'}</title>
      <meta name="BBC" content="Apps for e-learning" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
   </Head>
  )
}

export default TagHead