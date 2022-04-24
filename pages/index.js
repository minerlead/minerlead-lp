// import useSWR from 'swr'
// import Person from '../components/Person'
//
// const fetcher = (url) => fetch(url).then((res) => res.json())
//
// export default function Index() {
//   const { data, error } = useSWR('/api/people', fetcher)
//
//   if (error) return <div>Failed to load</div>
//   if (!data) return <div>Loading...</div>
//
//   return (
//     <ul>
//       {data.map((p, i) => (
//         <Person key={i} person={p} />
//       ))}
//     </ul>
//   )
// }

import {HeroHeader} from "../components/heroes/HeroHeader";
import PresentationSection from "../components/heroes/PresentationSection";
import HeroFooter from "../components/footers/HeroFooter";

export default function Example() {
  return (
    <div className="relative bg-gray-50 overflow-y-scroll block h-full scroll-smooth">
      <HeroHeader />

      <main className="lg:relative">
        <PresentationSection />

      </main>

      <HeroFooter />
    </div>
  )
}
