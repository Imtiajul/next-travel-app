import Image from "next/image"

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="max-container padding-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={52} height={52} />
        <p className="uppercase text-green-50 -mt-1 mb-3 regular-18">
          We are here for you
        </p>

        <div className="flex justify-between flex-wrap">
          <h2 className="bold-32 sm:bold-40 lg:bold-64 xl:max-w-[390px] mb-6">
            Guide You to Easy Path
          </h2>
          <p className="regular-16 text-gray-50 xl:max-w-[520px]">
            Only with the hilink application you will no longer get lost and get
            lost again, because we already support offline maps when there is no
            internet connection in the field. Invite your friends, relatives and
            friends to have fun in the wilderness through the valley and reach
            the top of the mountain
          </p>
        </div>
      </div>

      <div className="flexCenter max-container w-full relative">
        <Image
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col w-full">
            <div className="flex flex-col w-full">
              <div className="flexBetween w-full">
                <p className="text-gray-20 regular-16">Destination</p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">Auas Calientes</p>
            </div>

            <div className="flex flex-col w-full">
              <p className="text-gray-20 regular-16">Tracking</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">
                Wonorejo Pasuruan
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide
