import Image from "next/image"
import { PEOPLE_URL } from "../constant"

interface CampProps {
  bgImage: string
  title: string
  subTitle: string
  peopleJoined: string
}

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-10 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] lg:h-[400px] xl:h-[640px] overflow-x-auto w-full items-start justify-start gap-8">
        <CampSite
          bgImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subTitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <CampSite
          bgImage="bg-bg-img-2"
          title="Mountain View Point"
          subTitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <b>Feeling Lost</b> and not knowing the way?
          </h2>
          <p className="regular-14 lg:regular-16 mt-4 text-white">
            {" "}
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            That&apos;s why we are here for those of you who want to start an
            adventure
          </p>
          <Image
            src="/quote.svg"
            alt="quote"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  )
}

const CampSite = ({ bgImage, title, subTitle, peopleJoined }: CampProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${bgImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-16 text-white">{subTitle}</p>
          </div>
        </div>

        <div className="flexCenter gap-6">
          <div className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image src={url} key={url} alt="person" width={52} height={52} />
            ))}
          </div>
          <p className="bold-16 md:bold-20 text-white">50+ Joined</p>
        </div>
      </div>
    </div>
  )
}

export default Camp
