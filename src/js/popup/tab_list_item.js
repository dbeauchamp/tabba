import React from 'react'
import styles from 'styles/tab.css'
import classnames from 'classnames/bind'

let cx = classnames.bind(styles)

const TabListItem = ({ tab, selected, active, onClick }) => {
  return (
    <li onClick={() => onClick(tab.id)} className={cx({ tab: true, active: tab.active, selected })}>
      <img className={styles.favicon} src={tab.favIconUrl} />
      { tab.title }
    </li>
  )
}

export default TabListItem
