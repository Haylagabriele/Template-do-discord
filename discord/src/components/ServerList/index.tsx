import React from "react";
import ServerButton from "../ServerButton";

import { Container , Separator} from './styles';

const ServerList: React.FC = ( )=>{

  return(
    <Container>
      <ServerButton isHome/>
      <Separator />
      <ServerButton hasNotifications />
      <ServerButton  mentions={3}/>
      <ServerButton/>
      <ServerButton hasNotifications/>
      <ServerButton/>
      <ServerButton/>
      <ServerButton mentions={56}/>
      <ServerButton/>
      <ServerButton/>
    </Container>
  )
};

export default ServerList;