import { Products, Product } from '@/components/products'

const fullTime: Product[] = [
  {
    outcome: "FAIL",
    product: "Tablelist",
    date: "2013-2017",
    description: "OpenTable for nightlife"
  },
  {
    outcome: "Success",
    product: "Barstool Sports",
    date: "2017-2023",
    description: "Media pirate ship"
  },
  {
    outcome: "--",
    product: "Vercel",
    date: "2023-present",
    description: "Frontend cloud"
  }
]

const advisor: Product[] = [
  {
    outcome: "FAIL",
    product: "Fritz.ai",
    date: "2017-2021",
    description: "Machine learning analytics"
  },
  {
    outcome: "--",
    product: "FoxyAI",
    date: "2021-present",
    description: "Visual property intelligence"
  },
  {
    outcome: "--",
    product: "Cheers Cash",
    date: "2022-present",
    description: "Gamifying your brands"
  },
  {
    outcome: "--",
    product: "PlanetScale",
    date: "2023-present",
    description: "Advanced MySQL platform"
  },
  {
    outcome: "--",
    product: "Activate",
    date: "2023-present",
    description: "Equipment workflow on autopilot"
  }
]

const projects: Product[] = [
  {
    outcome: "FAIL",
    product: "Pupploads",
    date: "2011",
    description: "Dog photo sharing"
  },
  {
    outcome: "FAIL",
    product: "Torch",
    date: "2011",
    description: "Flashlight for iPhone"
  },
  {
    outcome: "FAIL",
    product: "joox.fm",
    date: "2011-2014",
    description: "Social music streaming"
  },
  {
    outcome: "FAIL",
    product: "Mongolytics",
    date: "2015-2017",
    description: "Looker for mongodb"
  },
  {
    outcome: "FAIL",
    product: "Samplr",
    date: "2015",
    description: "Meals as a service"
  },
  {
    outcome: "FAIL",
    product: "TTime",
    date: "2015-2016",
    description: "MBTA subway tracker"
  },
  {
    outcome: "FAIL",
    product: "Face to Face",
    date: "2016",
    description: "iMessage Group FaceTime"
  },
  {
    outcome: "FAIL",
    product: "Is My App Live",
    date: "2017",
    description: "App Store release tracker"
  },
  {
    outcome: "Success",
    product: "PTDefender",
    date: "2017-2018",
    description: "Add-on for ProfitTrailer"
  },
  {
    outcome: "FAIL",
    product: "GuestPlease",
    date: "2020-2021",
    description: "Connect guests & podcasts"
  },
  {
    outcome: "FAIL",
    product: "DIY Placecards",
    date: "2020-2021",
    description: "Printable placecards"
  },
  {
    outcome: "--",
    product: "Swift Cloud",
    date: "2022-present",
    description: "Simple server side Swift"
  },
  {
    outcome: "--",
    product: "Helios CRM",
    date: "2022-present",
    description: "SMS marketing"
  },
  {
    outcome: "--",
    product: "Lunara Capital",
    date: "2020-present",
    description: "Automated trading"
  }
]

const intern: Product[] = [
  {
    outcome: "Success",
    product: "WhatsApp",
    date: "2012",
    description: "Message privately"
  },
  {
    outcome: "FAIL",
    product: "Happier",
    date: "2013",
    description: "Your well being matters"
  }
]

function Section(props: { title: string, products: Product[] }) {
  return (
    <>
      <div className="z-10 w-full items-center justify-between text-2xl lg:flex pt-10">
        <h2>{props.title}</h2>
      </div>
      <div className="z-10 w-full items-center justify-between text-sm lg:flex pt-4">
        <Products products={props.products.toReversed()} />
      </div>
    </>
  )
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 pb-20">
      <div className="w-full max-w-4xl">
        <div className="z-10 w-full items-center justify-between text-4xl lg:flex pb-4 pt-10">
          <h1>Andrew Barba</h1>
        </div>
        <div className="z-10 w-full items-center justify-between text-md lg:flex pb-4">
          <p>Coding is a lot like skateboarding - you&apos;ll fall far more often than you&apos;ll land.</p>
        </div>
        <div className="z-10 w-full items-center space-x-5 text-sm lg:flex underline">
          <a href="https://www.github.com/AndrewBarba">github</a>
          <a href="https://docs.google.com/document/d/1aHs4peKIfoUQZDuPOnp5W0QB9h24hpUJRjNhKI5hPDE/edit?usp=sharing">resume</a>
          <a href="https://www.linkedin.com/in/andrewbarba">linkedin</a>
          <a href="https://www.twitter.com/andrew_barba">twitter</a>
        </div>
        <Section title="Full Time" products={fullTime} />
        <Section title="Advisor" products={advisor} />
        <Section title="Projects" products={projects} />
        <Section title="Intern" products={intern} />
      </div>
    </main>
  )
}
