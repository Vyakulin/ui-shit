import { Brdcrmb, Crd } from "@/app/components/atoms"
import { Fragment } from "react"

export default function Page() {
  return (
    <Fragment>
      <div className='el-3-2'>
          <Crd color='b'>
            <Brdcrmb bg='bg' color='w'/>
            <Brdcrmb bg='bg' color='w2'/>
            <Brdcrmb bg='bg' color='w3'/>
            <Brdcrmb bg='bg' color='a'/>
            <Brdcrmb bg='ol' color='w'/>
            <Brdcrmb bg='ol' color='w2'/>
            <Brdcrmb bg='ol' color='w3'/>
            <Brdcrmb bg='ol' color='a'/>
            <Brdcrmb bg='txt' color='w'/>
            <Brdcrmb bg='txt' color='w2'/>
          </Crd>
          <Crd color='w'>
            <Brdcrmb bg='bg' color='b'/>
            <Brdcrmb bg='bg' color='b2'/>
            <Brdcrmb bg='bg' color='b3'/>
            <Brdcrmb bg='bg' color='a'/>
            <Brdcrmb bg='ol' color='b'/>
            <Brdcrmb bg='ol' color='b2'/>
            <Brdcrmb bg='ol' color='b3'/>
            <Brdcrmb bg='ol' color='a'/>
            <Brdcrmb bg='txt' color='b'/>
            <Brdcrmb bg='txt' color='b2'/>
          </Crd>
        </div>
    </Fragment>
  )
}