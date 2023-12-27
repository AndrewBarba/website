import { Products, Product } from '@/components/products'

const fullTime: Product[] = [
  {
    profit: "FAIL",
    product: "Tablelist",
    date: "2013-2017",
    description: "OpenTable for nightlife"
  },
  {
    profit: "Success",
    product: "Barstool Sports",
    date: "2017-2023",
    description: "Media pirate ship"
  },
  {
    profit: "—-",
    product: "Vercel",
    date: "2023-present",
    description: "Frontend cloud"
  }
]

const advisor: Product[] = [
  {
    profit: "FAIL",
    product: "Fritz.ai",
    date: "2017-2021",
    description: "Machine learning analytics"
  },
  {
    profit: "--",
    product: "FoxyAI",
    date: "2021-present",
    description: "Visual property intelligence"
  },
  {
    profit: "--",
    product: "CheersCash",
    date: "2022-present",
    description: "Gamifying your favorite brands"
  },
  {
    profit: "--",
    product: "Trio",
    date: "2023-present",
    description: "For artists, fans, and creators"
  },
  {
    profit: "--",
    product: "Activate",
    date: "2023-present",
    description: "Your equipment workflow on autopilot"
  }
]

const projects: Product[] = [
  {
    profit: "FAIL",
    product: "Pupploads",
    date: "2011",
    description: "Dog photo sharing"
  },
  {
    profit: "FAIL",
    product: "Torch",
    date: "2011",
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
    product: "Mongolytics",
    date: "2015-2017",
    description: "Looker for mongodb"
  },
  {
    profit: "FAIL",
    product: "Samplr",
    date: "2015",
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
    date: "2016",
    description: "iMessage Group FaceTime"
  },
  {
    profit: "FAIL",
    product: "Is My App Live",
    date: "2017",
    description: "App Store release tracker"
  },
  {
    profit: "Success",
    product: "PTDefender",
    date: "2017-2018",
    description: "Add-on for ProfitTrailer"
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
    profit: "--",
    product: "Swift Cloud",
    date: "2022-present",
    description: "Simple server side Swift"
  },
  {
    profit: "—-",
    product: "Helios CRM",
    date: "2022-present",
    description: "SMS marketing"
  },
  {
    profit: "—-",
    product: "Lunara Capital",
    date: "2020-present",
    description: "Automated trading"
  }
]

const intern: Product[] = [
  {
    profit: "Success",
    product: "WhatsApp",
    date: "2012",
    description: "Message privately"
  },
  {
    profit: "FAIL",
    product: "Happier",
    date: "2013",
    description: "Your well being matters"
  }
]

function Section(props: { title: string, products: Product[] }) {
  return (
    <>
      <div className="z-10 max-w-5xl w-full items-center justify-between text-2xl lg:flex pt-10">
        <h2>{props.title}</h2>
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex pt-4">
        <Products products={props.products.toReversed()} />
      </div>
    </>
  )
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 pb-20">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-4xl lg:flex pb-4 pt-10">
        <h1>Andrew Barba</h1>
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between text-md lg:flex pb-4">
        <p>Coding is a lot like skateboarding - you&apos;ll fall far more often than you&apos;ll land.</p>
      </div>
      <div className="z-10 max-w-5xl w-full items-center space-x-5 text-sm lg:flex underline">
				<a href="https://www.github.com/AndrewBarba">github</a>
				<a href="https://docs.google.com/document/d/1aHs4peKIfoUQZDuPOnp5W0QB9h24hpUJRjNhKI5hPDE/edit?usp=sharing">resume</a>
				<a href="https://www.linkedin.com/in/andrewbarba">linkedin</a>
				<a href="https://www.twitter.com/andrew_barba">twitter</a>
			</div>
      <Section title="Full Time" products={fullTime} />
      <Section title="Advisor" products={advisor} />
      <Section title="Projects" products={projects} />
      <Section title="Intern" products={intern} />
    </main>
  )
}
