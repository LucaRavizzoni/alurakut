import React from "react";
import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import {
  AlurakutMenu,
  AlurakutProfileSidebarMenuDefault,
  OrkutNostalgicIconSet,
} from "../src/lib/AlurakutCommons";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";

function ProfileSideBar(propriedades) {
  return (
    <Box as="aside">
      <img
        src={`https://github.com/${propriedades.githubUser}.png`}
        style={{ borderRadius: "8px" }}
      />
      <hr />

      <p>
        <a
          className="boxLink"
          href={"https://github.com/${propriedades.githubUser}"}
        >
          @{propriedades.githubUser}
        </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}

function ProfileRelationsBox(propriedades) {
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        {propriedades.title} ({propriedades.items.length})
      </h2>
      <ul>
        {/* {seguidores.map((itemAtual) => {
          return (
            <li key={itemAtual}>
              <a href={`https://github.com/${itemAtual}.png`}>
                <img src={itemAtual.image} />
                <span>{itemAtual.title}</span>
              </a>
            </li>
          )
        })} */}
      </ul>
    </ProfileRelationsBoxWrapper>
  );
}

export default function Home() {
  const usuarioAleatorio = "LucaRavizzoni";
  const [comunidades, setComunidades] = React.useState([
    {
      id: "1",
      title: "Eu odeio acordar cedo",
      image: "https://alurakut.vercel.app/capa-comunidade-01.jpg",
      url: "https://www.youtube.com/watch?v=CBBlnRSOGRs",
    },
    {
      id: "2",
      title: "Eu colho flores e Tony Ramos",
      image:
        "https://www.bahianoticias.com.br/fotos/holofote_noticias/32375/IMAGEM_NOTICIA_5.jpg?checksum=1380913698",
    },
    {
      id: "3",
      title: "Simplesmente amamos gatos",
      image:
        "https://www.mundocogumelo.com.br/wp-content/uploads/2016/01/louis_wain_img.jpg",
    },
    {
      id: "4",
      title: "Wake'n Drift",
      image:
        "https://www.velocidadenosangue.com/wp-content/uploads/2020/05/UDGames7-780x470.jpg",
    },
    {
      id: "5",
      title: "Bodyboard Everyday",
      image: "https://i.ytimg.com/vi/B6Zjcc7MpGk/maxresdefault.jpg",
    },
    {
      id: "6",
      title: "Mastercheff BR",
      image:
        "data:image/jpeg;base64,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",
    },
  ]);
  //const comunidades = comunidades[0];
  //const alteradorDeComunidades/setComunidades = comunidades[1];
  console.log("Nosso teste", comunidades);
  // const comunidades = ['Alurakut'];
  const pessoasFavoritas = [
    "juunegreiros",
    "peas",
    "omariosouto",
    "felipefialho",
    "gustavomaes",
    "EduardoBmx",
  ];

  const [seguidores, setSeguidores] = React.useState([]);
  // 0 - Pegar o array de dados do github
  React.useEffect(function () {
    fetch("https://api.github.com/users/peas/followers")
      .then(function (respostaDoServidor) {
        return respostaDoServidor.json();
      })
      .then(function (respostaCompleta) {
        setSeguidores(respostaCompleta);
      });
  }, []);

  console.log("seguidores antes do return", seguidores);

  // 1 - Criar um box que vai ter um map, baseado nos items do array
  // que pegamos do GitHub

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSideBar githubUser={usuarioAleatorio} />
        </div>
        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">Bem vindo(a)</h1>

            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form
              onSubmit={function handleCriaComunidade(e) {
                e.preventDefault();
                const dadosDoForm = new FormData(e.target);

                console.log("Campo: ", dadosDoForm.get("title"));
                console.log("Campo: ", dadosDoForm.get("image"));

                const comunidade = {
                  id: new Date().toISOString(),
                  title: dadosDoForm.get("title"),
                  image: dadosDoForm.get("image"),
                };
                const comunidadesAtualizadas = [...comunidades, comunidade];
                setComunidades(comunidadesAtualizadas);
              }}
            >
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                />
              </div>
              <div>
                <input
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"
                />
              </div>

              <button>Criar comunidade</button>
            </form>
          </Box>
        </div>
        <div
          className="profileRelationsArea"
          style={{ gridArea: "profileRelationsArea" }}
        >
          <ProfileRelationsBox title="Seguidores" items={seguidores} />
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Comunidades ({comunidades.length})</h2>
            <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`/users/${itemAtual.title}`}>
                      <img src={itemAtual.image} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
