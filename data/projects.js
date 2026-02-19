export const projects = [
  {
    id: 1,
    slug: "painel-arboviroses",
    title: "Painel Arboviroses",
    description: "Dashboard para apoio à tomada de decisão no combate à Dengue e Chikungunya na SESAPI.",
    technologies: ["Power BI"],
    liveUrl: "https://app.powerbi.com/view?r=eyJrIjoiYzAzYjAzMGMtNWVlMS00MWUxLTgwZWQtZDk1MTMyNGQyZTllIiwidCI6IjQwN2VmYjUxLTM3YTEtNDI5Mi04NWI0LTc1NTc2MjY0YjU5YiJ9",
    image: "./assets/paineis/painel_dengue.png",
    metodo: "O Processo de Atualização e construção dos dados, consiste em Ingestão dos dados do SINAN e do IBGE, criação de indicadores e dashboards interativos"
  },
  {
    id: 2,
    slug: "spotify",
    title: "Painel Spotify",
    description: "Dashboard interativo para análise de retrospectiva musical.",
    technologies: ["Python", "Streamlit"],
    liveUrl: "https://spotifydashboard-bubzqn3groy9hhxrfvdadh.streamlit.app/",
    image: "./assets/paineis/spotify.png",
    metodo: "importação de dados do Spotify, criação de indicadores e dashboards interativos"
  },
  {
    id:3,
    slug:"andamento-processos",
    title:"Andamento Processos",
    description:"Painel focado em monitoramento de andamento de processos.",
    technologies:["Power BI"],
    liveUrl:"https://app.powerbi.com/view?r=eyJrIjoiYjZiM2NhNTQtNGU1Mi00MjhkLTkwMGEtOWUxMzFkZDRjNjBjIiwidCI6ImNhNTczMDIzLTViMWEtNDBmMS04YzNkLTJjNWVmNThlNGIzMCJ9",
    image:"./assets/paineis/andamento.png",
    metodo:"Os dados são importados do sistema de processos SEI da SESAPI via webscraping e processados em Power BI. O painel é atualizado automaticamente a cada 24 horas."
  },
  {
    id: 4,
    slug: "Painel-Emprestimos",
    title: "Painel Emprestifacil",
    description: "Painel focado em monitoramento de empréstimos, e analises financeiras e de clientes.",
    technologies: ["Power BI", "Python"],
    liveUrl: "https://app.powerbi.com/view?r=eyJrIjoiNzVkOWY2MjMtZGI5NC00YzljLTkxZjMtZmIzZThjM2YwZWRkIiwidCI6ImNhNTczMDIzLTViMWEtNDBmMS04YzNkLTJjNWVmNThlNGIzMCJ9",
    image: "../assets/paineis/Empresti.png",
    metodo: "Dados gerados em Python com Python Faker, importados no Power BI"
  },
  {
    id: 5,
    slug: "Painel-Saude-Digital",
    title: "Painel Monitoramento Saúde Digital",
    description: "Painel focado em monitoramento de Atendimentos e Indicadores do Programa Saúde Digital.",
    technologies: ["Power BI"],
    liveUrl: "https://app.powerbi.com/view?r=eyJrIjoiMTIxNmFkMDAtM2VkYS00NjJiLWI1ZDctM2JjN2E2MmRiODhkIiwidCI6IjQwN2VmYjUxLTM3YTEtNDI5Mi04NWI0LTc1NTc2MjY0YjU5YiJ9",
    image: "./assets/paineis/saude.png",
    metodo: "Esse Painel consiste em Levantar os dados do Programa como um todo, focado em levantar os dados como atendimentos, Especialidades e Regiões com maior acesso a atendimentos"

  },
  {
    id: 6,
    slug: "Painel-Lesoes-Autoprovocadas",
    title: "Painel Lesões Autoprovocadas",
    description: "Painel focado em monitoramento de lesões autoprovocadas.",
    technologies: ["Power BI", "SQL"],
    liveUrl: "https://app.powerbi.com/view?r=eyJrIjoiYmFmMDliODktN2FmZC00MWM5LTk4NTktN2ZmOWM3NzVkMTY0IiwidCI6IjQwN2VmYjUxLTM3YTEtNDI5Mi04NWI0LTc1NTc2MjY0YjU5YiJ9",
    image: "./assets/paineis/autoprovocadas.png",
    metodo: "Painel consiste em fontes vinda do SINAM - Sistema de Informação de Agravos deNotificação e SIM - Sistema de Informação de Mortalidade"

  },
  {
    id: 7,
    slug: "Painel-Forca-Trabalho",
    title: "Painel Força de Trabalho",
    description: "Painel focado em monitoramento de Força de Trabalho.",
    technologies: ["Power BI"],
    liveUrl: "https://app.powerbi.com/view?r=eyJrIjoiYTY4MGEyNTAtZWNlYy00NmIzLWJiNzYtZWI4YWE5MDEzNGY4IiwidCI6IjQwN2VmYjUxLTM3YTEtNDI5Mi04NWI0LTc1NTc2MjY0YjU5YiJ9",
    image: "./assets/paineis/trabalho.png",
    metodo: "Painel desenvolvido com foco em monitoramento de batidas e tempo de trabalho."
  },
  {
    id: 8,
    slug: "Painel-imunizacao",
    title: "Painel Imunização",
    description: "Painel focado em monitoramento de Imunização.",
    technologies: ["Power BI"],
    liveUrl: "https://app.powerbi.com/view?r=eyJrIjoiNTA4NTc0ZmQtNTE5ZS00ZGE0LWEwMGEtNjhjMjFmMDczM2M1IiwidCI6IjQwN2VmYjUxLTM3YTEtNDI5Mi04NWI0LTc1NTc2MjY0YjU5YiJ9",
    image: "./assets/paineis/imunizacao.png",
    metodo: "Painel focado em monitoramento de vacinas e e Imunizacao via SUS."
  }
];
