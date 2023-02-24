import {
  FacebookIcon,
  InstagramIcon,
  TiktokIcon,
  YoutubeIcon,
} from '@/common/components/Icons'

export default function BaseFooterSocial() {
  const iconClassName = 'w-6 h-6'

  return (
    <div className="flex space-x-2.5">
      <a href="#" className={iconClassName}>
        <FacebookIcon className={iconClassName} />
      </a>
      <a href="#" className={iconClassName}>
        <InstagramIcon className={iconClassName} />
      </a>
      <a href="#" className={iconClassName}>
        <TiktokIcon className={iconClassName} />
      </a>
      <a href="#" className={iconClassName}>
        <YoutubeIcon className={iconClassName} />
      </a>
    </div>
  )
}
