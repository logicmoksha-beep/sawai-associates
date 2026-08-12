import { Link } from 'react-router-dom'

export default function Button({ to, href, variant = 'primary', block = false, children, ...rest }) {
  const cls = `btn btn-${variant} ${block ? 'btn-block' : ''}`.trim()
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{children}</a>
  return <button className={cls} {...rest}>{children}</button>
}
