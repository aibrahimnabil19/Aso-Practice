import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import outfits from "../../data"

const StylesCard = () => {
  const sliced = outfits.slice(0, 4)
  return (
    <main className="bg-[#F9F9F9]">
      <section className="flex mx-auto max-w-5xl sm:grid-cols-2 pb-10.5">
        {
          sliced.map((outfit) => (
            <Card key={outfit.id} className="relative mx-auto w-62.5 p-0 border-0 max-w-sm shadow-none bg-[#F9F9F9]">

              <div className="relative">
                <div className="absolute inset-0 z-10 bg-black/20 w-full h-full rounded-xl" />
                <Image
                  src={outfit.image}
                  width={"400"}
                  height={"400"}
                  alt={outfit.title}
                  className="aspect-video w-full h-105 object-cover brightness-60  dark:brightness-40 rounded-xl"
                />


                <div className="absolute bottom-0 left-0 z-30 mx-4 mb-4 gap-1.5">
                  <Badge className="px-3 py-1 bg-[#D9D6D3] text-[#CC5500] rounded-xl text-[12px]" variant="secondary">{outfit.category}</Badge>
                  <CardTitle className="text-white text-[16px] font-semibold">{outfit.title}</CardTitle>
                </div>
              </div>

              <div className="flex w-full gap-2 items-center justify-center h-10 border-[0.5px] rounded-xl bg-white">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.66669 10H13.3334M10 6.66669V13.3334M18.3334 10C18.3334 14.6024 14.6024 18.3334 10 18.3334C5.39765 18.3334 1.66669 14.6024 1.66669 10C1.66669 5.39765 5.39765 1.66669 10 1.66669C14.6024 1.66669 18.3334 5.39765 18.3334 10Z" stroke="black" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <h4 className="text-black text-[12px] font-normal">Add to collection</h4>
              </div>
            </Card>
          ))
        }

      </section>
    </main>
  )
}
export default StylesCard
