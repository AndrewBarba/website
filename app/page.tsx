import { Products, Product } from '@/components/products'

const products: Product[] = [
  {
    profit: "FAIL",
    product: "Pupploads",
    date: "2011-2011",
    description: "Dog photo sharing"
  },
  {
    profit: "FAIL",
    product: "Torch",
    date: "2011-2011",
    description: "Flashlight for iPhone"
  },
  {
    profit: "FAIL",
    product: "joox.fm",
    date: "2011-2014",
    description: "Social music streaming"
  },
  {
    profit: "FAIL",
    product: "Happier",
    date: "2012-2013",
    description: "New social network"
  },
  {
    profit: "FAIL",
    product: "Mongolytics",
    date: "2015-2017",
    description: "Looker for mongodb"
  },
  {
    profit: "FAIL",
    product: "Samplr",
    date: "2015-2015",
    description: "Meals as a service"
  },
  {
    profit: "FAIL",
    product: "TTime",
    date: "2015-2016",
    description: "MBTA subway tracker"
  },
  {
    profit: "FAIL",
    product: "Face to Face",
    date: "2016-2016",
    description: "iMessage Group FaceTime"
  },
  {
    profit: "FAIL",
    product: "Is My App Live",
    date: "2017-2017",
    description: "App Store release tracker"
  },
  {
    profit: "FAIL",
    product: "Tablelist",
    date: "2013-2017",
    description: "OpenTable for nightlife"
  },
  {
    profit: "Success",
    product: "PTDefender",
    date: "2017-2018",
    description: "Add-on for ProfitTrailer"
  },
  {
    profit: "FAIL",
    product: "Fritz.ai",
    date: "2017-2020",
    description: "AI/ML analytics"
  },
  {
    profit: "FAIL",
    product: "GuestPlease",
    date: "2020-2021",
    description: "Connect guests & podcasts"
  },
  {
    profit: "FAIL",
    product: "DIY Placecards",
    date: "2020-2021",
    description: "Printable placecards"
  },
  {
    profit: "Success",
    product: "Barstool Sports",
    date: "2017-2023",
    description: "Media pirate ship"
  },
  {
    profit: "FAIL",
    product: "Swift Cloud",
    date: "2022-2023",
    description: "Simple server side Swift"
  },
  {
    profit: "—",
    product: "Helios CRM",
    date: "2022-present",
    description: "SMS marketing"
  },
  {
    profit: "—",
    product: "Lunara Capital",
    date: "2020-present",
    description: "Automated trading"
  }
]


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-4xl lg:flex mb-4 mt-10">
        <h1>Andrew Barba</h1>
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between text-md lg:flex mb-4">
        <h1>Coding is a lot like skateboarding - you&apos;ll fall far more often than you&apos;ll land.</h1>
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex mb-4 mt-10">
        <Products products={products} />
      </div>
      <div className="z-10 max-w-5xl w-full items-center space-x-10 text-sm lg:flex mt-10">
				<a href="https://www.github.com/AndrewBarba">github</a>
				<a href="https://docs.google.com/document/d/1aHs4peKIfoUQZDuPOnp5W0QB9h24hpUJRjNhKI5hPDE/edit?usp=sharing">resume</a>
				<a href="https://www.linkedin.com/in/andrewbarba">linkedin</a>
				<a href="https://www.twitter.com/andrew_barba">twitter</a>
			</div>
    </main>
  )
}
