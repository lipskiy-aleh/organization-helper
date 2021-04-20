import * as React from 'react'

import {CanceledButton} from 'components/CanceledButton'

export const SickLeave: React.FC = () => {
  return (
    <>
      <div>
        {/*<img style={{marginRight: '5px'}} src="https://img.icons8.com/fluent-systems-regular/20/000000/xbox-cross.png"/>*/}
          Sick leave
      </div>
      <div>reason</div>

      <div>
        <CanceledButton />
      </div>

      <div>date</div>
      <div></div>
    </>
  )
}
