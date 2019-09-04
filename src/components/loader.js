import React from 'react'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'

const Loading = () => (
  <div>
  <Segment>
      <Dimmer active>
        <Loader size='huge' active inline='centered'>Loading</Loader>
      </Dimmer>
    </Segment>
  </div>
)

export default Loading