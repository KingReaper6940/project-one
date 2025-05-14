import Image from "next/image"

interface PageHeaderProps {
  title: string
  description: string
  backgroundImage: string
}

export function PageHeader({ title, description, backgroundImage }: PageHeaderProps) {
  return (
    <section className="relative h-[300px] w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 to-orange-500/70">
        <Image
          src={backgroundImage || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover mix-blend-overlay"
          priority
        />
      </div>
      <div className="relative container h-full flex flex-col justify-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg md:text-xl">{description}</p>
        </div>
      </div>
    </section>
  )
}
