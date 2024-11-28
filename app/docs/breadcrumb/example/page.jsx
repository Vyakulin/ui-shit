import { Brcr, Cr } from "@/app/components/atoms"
import { Fragment } from "react"

export default function Page() {
  return (
    <Fragment>
      <div className='el-3-2'>
          <Cr color='b'>
            <Brcr bg='bg' color='w'/>
            <Brcr bg='bg' color='w2'/>
            <Brcr bg='bg' color='w3'/>
            <Brcr bg='bg' color='a'/>
            <Brcr bg='ol' color='w'/>
            <Brcr bg='ol' color='w2'/>
            <Brcr bg='ol' color='w3'/>
            <Brcr bg='ol' color='a'/>
            <Brcr bg='txt' color='w'/>
            <Brcr bg='txt' color='w2'/>
          </Cr>
          <Cr color='w'>
            <Brcr bg='bg' color='b'/>
            <Brcr bg='bg' color='b2'/>
            <Brcr bg='bg' color='b3'/>
            <Brcr bg='bg' color='a'/>
            <Brcr bg='ol' color='b'/>
            <Brcr bg='ol' color='b2'/>
            <Brcr bg='ol' color='b3'/>
            <Brcr bg='ol' color='a'/>
            <Brcr bg='txt' color='b'/>
            <Brcr bg='txt' color='b2'/>
          </Cr>
        </div>
    </Fragment>
  )
}