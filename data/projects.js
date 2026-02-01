export const projects = [
  {
    id: 1,
    slug: "painel-arboviroses",
    title: "Painel Arboviroses",
    description: "Dashboard para apoio à tomada de decisão no combate à Dengue e Chikungunya na SESAPI.",
    technologies: ["Power BI"],
    liveUrl: "https://app.powerbi.com/view?r=eyJrIjoiYzAzYjAzMGMtNWVlMS00MWUxLTgwZWQtZDk1MTMyNGQyZTllIiwidCI6IjQwN2VmYjUxLTM3YTEtNDI5Mi04NWI0LTc1NTc2MjY0YjU5YiJ9",
    image: "../assets/paineis/painel_dengue.png",
    metodo: "O Processo de Atualização e construção dos dados, consiste em Ingestão dos dados do SINAN e do IBGE, criação de indicadores e dashboards interativos"
  },
  {
    id: 2,
    slug: "spotify",
    title: "Painel Spotify",
    description: "Dashboard interativo para análise de retrospectiva musical.",
    technologies: ["Python", "Streamlit"],
    liveUrl: "https://spotifydashboard-bubzqn3groy9hhxrfvdadh.streamlit.app/",
    image: "../assets/paineis/spotify.png",
    metodo: "importação de dados do Spotify, criação de indicadores e dashboards interativos"
  },
  {
    id:3,
    slug:"andamento-processos",
    title:"Andamento Processos",
    description:"Painel focado em monitoramento de andamento de processos.",
    technologies:["Power BI"],
    liveUrl:"https://app.powerbi.com/view?r=eyJrIjoiYjZiM2NhNTQtNGU1Mi00MjhkLTkwMGEtOWUxMzFkZDRjNjBjIiwidCI6ImNhNTczMDIzLTViMWEtNDBmMS04YzNkLTJjNWVmNThlNGIzMCJ9",
    image:"../assets/paineis/andamento.png",
    metodo:"Os dados são importados do sistema de processos SEI da SESAPI via webscraping e processados em Power BI. O painel é atualizado automaticamente a cada 24 horas."
  }
];
