import * as React from 'react'

import { ApprovedButton } from 'components/ApprovedButton'

export const RegularVacation: React.FC = () => {
  return (
    <>
      <div>
        {/*
        <img style={{marginRight: '5px'}} src="https://img.icons8.com/ios/20/000000/sun--v1.png"/>
*/}
          Regular vacation
      </div>
      <div>reason</div>

      <div>
        <ApprovedButton />
      </div>

      <div>date</div>
      <div></div>
    </>
  )
}
