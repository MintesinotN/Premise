type MenuItem = {
  name: string;
  path?: string;
  description?:string;
  day?:string;
  image?:string;
};

export type Menus = {
  title: string;
  items: MenuItem[];
};

const menu: Menus[] = [
  {
    title: "Navbar",
    items: [
      { name: "home", path: "/home" },
      { name: "macro", path: "/macro" },
      { name: "AI", path: "" },
      { name: "Bitcoin/Crypto", path: "" },
      { name: "energy", path: "" },
      { name: "Research engine", path: "/research" },
      { name: "thesis engine", path: "/thesis" },
    ],
  },
  {
    title: "11.1.24",
    items: [
      {name: "Big Tech Earnings:", description: " Major tech firms, including Microsoft, Meta, and Apple, reported mixed quarterly earnings, impacting market sentiment and leading to fluctuations in the Nasdaq. Investor focus remained on tech sector resilience amid high valuation scrutiny.​"},
      {name: "Economic Indicators:", description: "Key U.S. economic data, including Q3 GDP growth at 3.2% and the PCE inflation index (down to 2.1%), pointed to steady economic expansion and easing inflationary pressures. This aligns with expectations for a \"soft landing,\" potentially influencing future Fed rate decisions.​"},
      {name: "Energy Market Movement:", description: "Oil prices saw a sharp decline (over 6%) following an Israeli strike on Iran that left oil infrastructure unaffected. The drop provided relief for energy-intensive industries like airlines, lifting shares for companies such as Delta and Carnival."},
      {name: "Global Economic Outlook:", description: "The IMF’s latest World Economic Outlook painted a stable yet modest global growth forecast, with continued disinflation in advanced economies. However, risks remain due to geopolitical tensions and potential disruptions from China’s property sector​."}
    ]
  },
  {
    title: "macro summary",
    items: [
      {name: "U.S. Job Market Strength:", description: "September's job report exceeded expectations, with 254,000 jobs added, lowering unemployment to 4.1% and boosting average wages by 4% annually. This reinforces the possibility of a “soft landing” and positions the Federal Reserve to consider a smaller 0.25% rate cut in November​ Deloitte United States."},
      {name: "U.S. Economic Growth:", description: "The U.S. economy grew at a 3.2% annualized rate in Q3, supported by resilient consumer spending and investments, fueling optimism for economic stability despite previous aggressive rate hikes.​"},
      {name: "Inflation Trends:", description: "In the Eurozone, inflation dropped below the European Central Bank’s 2% target for the first time in three years, while U.S. inflation, as measured by the PCE index, remained close to the Fed’s 2% target. This inflation control may allow central banks to cautiously ease rates without risking destabilizing price increases​."},
      {name: "Global Economic Outlook:", description:"The IMF’s latest projections indicate stable but modest growth globally, with geopolitical tensions and potential financial volatility as risks. Asia is expected to lead growth, supported by investments in AI and technology across China and India, while disruptions weigh on regions like the Middle East and Europe."}
    ]
  },
  {
    title: "Digital Gold and Inflation Hedge",
    items: [
      {name: "Scarcity and Supply Cap:", description: "Bitcoin’s fixed supply of 21 million coins makes it an inherently scarce asset, which some analysts argue is a hedge against inflation and currency devaluation."},
      {name: "Institutional Acceptance:", description: " Institutions view Bitcoin as “digital gold,” with companies and funds adding Bitcoin to their balance sheets as a hedge. Demand could increase as investors seek protection against inflation and excessive government debt."}
    ]
  },
  {
    title: "Increasing Adoption and Infrastructure",
    items: [
      {name: "Regulatory Clarity:", description: "In recent years, clearer regulatory frameworks in the U.S., Europe, and Asia have created a more defined space for Bitcoin, leading to greater institutional adoption."},
      {name: "Payment and Transaction Use Cases:", description: "Bitcoin’s adoption as a payment method is growing, with companies like Tesla, PayPal, and others facilitating its use in transactions. The Bitcoin Lightning Network has also improved transaction efficiency, expanding its potential use in daily payments."},
      {name: "Network and Technological Security:", description: "Bitcoin remains the most secure and decentralized blockchain, with a strong user base and network effect. Its robust technology and commitment to decentralization create trust and stability compared to other cryptocurrencies."}
    ]
  },
  {
    title: "Growing Global Demand for Decentralization",
    items: [
      {name: "Sovereignty and Financial Independence:", description: "Bitcoin offers a decentralized, borderless currency alternative to centralized systems, appealing to those concerned about the concentration of power in traditional financial institutions."},
      {name: "Emerging Markets Demand:", description: "Bitcoin adoption is increasing in developing economies like Nigeria, Argentina, and Turkey, where people face high inflation and volatile fiat currencies. This growth trend could drive long-term demand as more people turn to Bitcoin to store value and transact globally."},
      {name: "Potential Reserve Currency:", description: "As more entities add Bitcoin to their reserves, Bitcoin could one day become a global reserve asset, diversifying countries’ reliance on fiat currencies and government bonds."}
    ]
  },
  {
    title: "Berkshire Hathaway’s cash pile reaches record $325.2 Billion",
    items: [
      {name: "Bloomberg", description: "Big-tech", day: "Yesterday", image: "/Bloomberg.png"}
    ]
  },
  {
    title: "Amazon's plan to rearchitect Alexa around LLMs could finally...",
    items: [
      {name: "The Verge", description: "Big-tech, AI", day: "Yesterday", image: "/The Verge.png"}
    ]
  },
  {
    title: "Global growth expected to remain stable yet underwhelming",
    items: [
      {name: "IMF", description: "Macro", day: "Today", image: "/IMF.png"}
    ]
  },
  {
    title: "2024 economic outlook: 10 considerations for th US economy",
    items: [
      {name: "JP Morgan", description: "Macro, Reports", day: "Yesterday", image:"/JP Morgan.png"}
    ]
  }
];

export default menu;