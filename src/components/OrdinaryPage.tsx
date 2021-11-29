import React from 'react'

export const OrdinaryPage: React.FC = ({ children }) => {
  return (
    <main className="main">
      <section className="section">
        <div className="container">
          <div className="content">
            <div className="columns">
              <div className="column">{children}</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
