import React from 'react';

type Props = {}

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-8 max-w-3xl mx-auto">
			{ children }
    </div>
  )
}

export default PageWrapper;