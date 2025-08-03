import { Outlet } from 'react-router'

const BaseLayout = (): React.JSX.Element => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default BaseLayout
