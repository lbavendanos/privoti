import { config } from 'lib/utils/helpers'
import {
  FacebookIcon,
  InstagramIcon,
  TiktokIcon,
  YoutubeIcon,
} from '@/common/components/Icons'

export default function BaseFooterSocial() {
  const appName = config<string>('app.name')
  const iconClassName = 'w-6 h-6'

  return (
    <div className="flex space-x-2.5">
      <a
        href="#"
        className={iconClassName}
        aria-label={`${appName} on Facebook`}
      >
        <FacebookIcon className={iconClassName} />
      </a>
      <a
        href="#"
        className={iconClassName}
        aria-label={`${appName} on Instagram`}
      >
        <InstagramIcon className={iconClassName} />
      </a>
      <a href="#" className={iconClassName} aria-label={`${appName} on Tiktok`}>
        <TiktokIcon className={iconClassName} />
      </a>
      <a
        href="#"
        className={iconClassName}
        aria-label={`${appName} on Youtube`}
      >
        <YoutubeIcon className={iconClassName} />
      </a>
    </div>
  )
}
