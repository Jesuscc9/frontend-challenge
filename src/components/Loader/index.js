import { LoaderStyles } from './styles.loader'

export const Loader = () => {
  return (
    <>
      <LoaderStyles />
      <div className='lds-ring'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  )
}
