import Container from "./container"
import SegHeader from "./SegHeader"
import Icon_1 from "../../public/SVG/icon_1"


function Services() {

  const services = [
    {
      id : 1,
      title: "Service Title",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloribus, ducimus qui dicta quo id. Facilis consectetur accusantium error perspiciatis aliquam ducimus, officiis quaerat, vel voluptatum impedit exercitationem, temporibus iusto.",
      logo : <Icon_1 color="#00c950"/>
    },
    {
      id : 2,
      title: "Service Title",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloribus, ducimus qui dicta quo id. Facilis consectetur accusantium error perspiciatis aliquam ducimus, officiis quaerat, vel voluptatum impedit exercitationem, temporibus iusto.",
      logo : <Icon_1 color="#00c950"/>
    },
    {
      id : 3,
      title: "Service Title",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloribus, ducimus qui dicta quo id. Facilis consectetur accusantium error perspiciatis aliquam ducimus, officiis quaerat, vel voluptatum impedit exercitationem, temporibus iusto.",
      logo : <Icon_1 color="#00c950"/>
    },
    {
      id : 4,
      title: "Service Title",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloribus, ducimus qui dicta quo id. Facilis consectetur accusantium error perspiciatis aliquam ducimus, officiis quaerat, vel voluptatum impedit exercitationem, temporibus iusto.",
      logo : <Icon_1 color="#00c950"/>
    }
  ]

  return (
    <div className="bg-base-100">
      <SegHeader title="Services"/>
      <Container>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-between py-20">
          {services.map((item)=>(
            <div key={item.id} className="">
              <span>
                {item.logo}
              </span>
              <div className="py-2">
                <h1 className="text-2xl font-bold text-green-400">
                  {item.title}
                </h1>
              </div>
              <p className="font-medium text-white/80">
                {item.description}
              </p>
          </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Services