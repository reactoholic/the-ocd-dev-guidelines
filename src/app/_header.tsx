import { BreadCrumb } from 'primereact/breadcrumb'

import { ThemeWidget } from '@/shared/ui/common/theme-widget'

import classes from './_app-styles.module.scss'

export const Header = () => {
  const items = [
    { label: 'Electronics' },
    { label: 'Computer' },
    { label: 'Accessories' },
    { label: 'Keyboard' },
    { label: 'Wireless' }
  ]
  const home = { icon: 'pi pi-home', url: 'https://primereact.org' }

  return (
    <div className={classes.header}>
      <BreadCrumb model={items} home={home} className={classes.breadcrumb} />

      <ThemeWidget />
    </div>
  )
}
