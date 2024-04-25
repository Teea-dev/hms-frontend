
import DefaultLayoutAsideNavbar from '@components/app/_global-components/DefaultLayoutSidebar';
import s from './layout.module.scss'
// import '@/base-styles/global.scss'
import '@components/base-styles/global.scss'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return(

    <div className={s.wrapper}>
            <aside className={s.asideNavs}>
                <DefaultLayoutAsideNavbar />
            </aside>
            <section className={s.contentSec}>
                {children}
            </section>
        </div>
  )
}
