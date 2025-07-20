import React from 'react'
import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Icon,
  Image,
} from 'semantic-ui-react'
 
const Scard = ({id,title,thumbnail,category,Removedata}) => (
  <Card>
    <Image src={thumbnail} wrapped ui={false} />
    <CardContent>
      <CardHeader>{id}</CardHeader>
     
      <CardDescription>
    {title}
      </CardDescription>
    </CardContent>
    <CardContent extra>
      <a>
        <Icon name='user' />
        category
      </a>
    </CardContent>
 
     <button onClick={()=>Removedata(id)}> Remove </button>
 
 
 
  </Card>
)
 
export default Scard
 