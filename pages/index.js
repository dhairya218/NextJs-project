// pages/index.js
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-blue-900 text-white">
      <Head>
        <title>Boost Your Leads - AI-Powered Campaigns</title>
        <meta name="description" content="Harness AI for Effective Campaigns" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-4">
          Boost Your Leads
        </h1>

        <p className="text-xl text-center mb-12">
          Harness AI for Effective Campaigns
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">AI-Powered Analytics</h2>
            <p>Leverage advanced AI to analyze your campaign data.</p>
          </div>

          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Smart Targeting</h2>
            <p>Reach the right audience with AI-driven insights.</p>
          </div>

          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Automated Workflows</h2>
            <p>Streamline your campaign processes with AI automation.</p>
          </div>

          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Predictive Lead Scoring</h2>
            <p>Identify high-potential leads using AI algorithms.</p>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </main>

      <footer className="text-center py-8 border-t border-white border-opacity-20">
        <a href="#" className="text-blue-300 hover:text-blue-100">
          Powered by AI Technology
        </a>
      </footer>
    </div>
  )
}