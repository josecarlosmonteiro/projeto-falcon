import Image from "next/image";
import { Row } from "./components/ui/Row";
import { Icons } from "./components/Icons";
import { PageBox } from "./components/ui/PageBox";
import { Box } from "./components/ui/Box";
import { Title } from "./components/ui/Title";
import { ServiceWithIcon } from "./components/ui/ServiceWithIcon";

export default function Home() {
  return (
    <main>
      <nav className="flex items-center gap-2 navbar">
        <Image alt="logo branca" src={'/FalconLogoAmarelo.png'} width={35} height={35} />

        <h1 className="text-2xl text-white">
          Falcon
        </h1>
      </nav>

      <br />

      <PageBox className="">
        <div className="w-[80%] mx-auto flex gap-8 items-center">
          <Image
            alt="FalconLogoAmarelo"
            src={'/FalconLogoAmarelo.png'}
            width={200} height={200}
          />

          <div>
            <Title>Falcon Consultoria</Title>
            <p className="text-justify font-xl mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex at provident, ea totam eos placeat cumque magni repudiandae reiciendis iure, incidunt eum eligendi tenetur ullam quos amet facilis aliquid debitis!
            </p>
          </div>
        </div>
      </PageBox>

      <PageBox className="w-[80%] mx-auto items-center justify-center gap-10">
        <div className="flex flex-col gap-10">
          <div className="text-end">
            <Title>Nossos Serviços</Title>
          </div>

          <div className="flex flex-col gap-4 mx-auto">

            <ServiceWithIcon icon={<Icons.Clipboard size={28} />}>
              Consultoria empresarial
            </ServiceWithIcon>

            <div>
              <ServiceWithIcon icon={<Icons.Scroll size={28} />}>
                Legalização e contabilidade
              </ServiceWithIcon>
            </div>

            <div>
              <ServiceWithIcon icon={<Icons.Wallet size={28} />}>
                Finanças pessoais
              </ServiceWithIcon>
            </div>

          </div>
        </div>

        <Image
          alt="FalconLogoBranco"
          src={"/FalconLogoBranco.png"}
          width={200}
          height={240}
        />
      </PageBox>

      <PageBox>
        <div className="w-[80%] mx-auto flex gap-8 items-center">
          <div>
            <Title>Visão</Title>
            <p className="text-justify font-xl mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex at provident, ea totam eos placeat cumque magni repudiandae reiciendis iure, incidunt eum eligendi tenetur ullam quos amet facilis aliquid debitis!
            </p>
          </div>

          <Image
            alt="FalconLogoAmarelo"
            src={'/FalconLogoAmarelo.png'}
            width={200} height={200}
          />
        </div>
      </PageBox>

      <PageBox>
        <div className="w-[80%] mx-auto ">
          <div className="text-center">
            <Title>Valores</Title>
          </div>
          <br />

          <Row className="gap-8">
            <Box className="cursor-default">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus mollitia ea, corrupti veniam maiores ullam id esse quidem ad explicabo accusamus autem quo magnam reiciendis nobis eum temporibus nulla qui!
            </Box>
            <Box className="cursor-default">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus mollitia ea, corrupti veniam maiores ullam id esse quidem ad explicabo accusamus autem quo magnam reiciendis nobis eum temporibus nulla qui!
            </Box>
            <Box className="cursor-default">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus mollitia ea, corrupti veniam maiores ullam id esse quidem ad explicabo accusamus autem quo magnam reiciendis nobis eum temporibus nulla qui!
            </Box>
          </Row>
        </div>
      </PageBox>

      <footer className="py-8 bg-yellow-400 text-black">
        <div className="w-[80%] mx-auto">
          <div className="flex gap-10 items-center">
            <Image
              alt="FalconLogomarcaPretoG"
              src={'/FalconLogomarcaPretoG.png'}
              width={100} height={100}
            />

            <div>
              <div>Whatsapp: (81)9.9999-9999</div>
              <div>Email: contato@mail.com</div>
            </div>
          </div>
        </div>
      </footer>
    </main >
  );
}
