import Link from 'next/link'
import React, { useState } from 'react'
import Web3 from 'web3'
import Layout from '../components/Layout'

const IndexPage = () => {

  const [accounts, setAccounts] = useState<string[]>([])
  const getAccessToWallet = async () => {
    const ethereum = window && (window as any).ethereum

    if (ethereum) {
      try {
        await ethereum.enable()
        console.log(true)
      } catch (e) {
        console.log(false)
      }
    }
  }

  const getAccounts = async () => {
    const ethereum = window && (window as any).ethereum

    if (ethereum) {
      const web3 = new Web3(ethereum)

      try {
        const accounts = await web3.eth.getAccounts();
        console.log('accounts', accounts)
        setAccounts(accounts)
      } catch (e) {
        console.log('failed to access accounts')
      }
    }
  }


  return (
    <Layout title='Home | Next.js + TypeScript Example'>
      <h1>Hello Next.js 👋</h1>
      <button onClick={getAccessToWallet}>add wallet</button>
      <button onClick={getAccounts}>access accounts</button>
      <p>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </p>
    </Layout>
  )
}

export default IndexPage
