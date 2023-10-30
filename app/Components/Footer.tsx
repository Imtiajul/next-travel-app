import Image from "next/image"
import Link from "next/link"
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "../constant"

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="max-container padding-container gap-14 flex flex-col flex-1">
        <div className="flex gap-[10%] flex-col flex-1 md:flex-row justify-center items-start">
          <Link href="/">
            <Image src="hilink-logo.svg" alt="logo" width={74} height={29} className="mb-10" />
          </Link>

          <div className="flex flex-wrap gap-10 md:flex-1 sm:justify-between">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title} key={columns.title}>
                <ul className="regular-14 flex flex-col text-gray-30 gap-4">
                  {columns.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                <ul className="regular-14 flex flex-col text-gray-30 gap-4">
                  {FOOTER_CONTACT_INFO.links.map((link) => (
                    <Link
                      href="/"
                      key={link.label}
                      className="flex flex-row gap-4"
                    >
                      <p className="whitespace-nowrap">{link.label}:</p>
                      <p className="medium-14 text-blue-70 whitespace-nowrap">
                        {link.value}
                      </p>
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="flex flex-row gap-5">
                  {SOCIALS.links.map((link) => (
                    <Link href="/" key={link}>
                      <Image src={link} alt={link} height={25} width={25} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        <div className="border bg-gray-30" />
        <p className="regular-14 w-full text-gray-30 text-center">
          2023 Hilink | All rights reserved
        </p>
      </div>
    </footer>
  )
}

type FooterColumnType = {
  title: string
  children: React.ReactNode
}

const FooterColumn = ({ title, children }: FooterColumnType) => {
  return (
    <li className="flex flex-col flex1 gap-4">
      <h4 className="bold-18 "> {title}</h4>
      {children}
    </li>
  )
}
export default Footer
