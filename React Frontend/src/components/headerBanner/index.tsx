
interface listedItemProps {
  title: string
}

const ListedItem = ({title}: listedItemProps) => (
  <li className="styled-components__CheckListItemWrapper-sc-14iskce-5 cxwGjl">
    <Tick />
    <p color="white" className="styled-components__StyledSubTitle-sc-1jewl6s-0 HrUOI">{title}</p>
  </li>
)

const Tick = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    <title>Tick</title>
    <path fill="white" fill-rule="nonzero" d="M6.509 12.086L2.578 9.304a1 1 0 0 0-1.156 1.633l4.777 3.38a1 1 0 0 0 1.413-.268l7.224-11a1 1 0 0 0-1.672-1.098L6.51 12.086z"></path>
  </svg>
)

export const EligabilityBanner = () => (
  <div className="Grid__StyledDiv-sc-1o91qoi-0 gwxTij">
    <div className="styled-components__ContentWrapper-sc-14iskce-3 dqptCc">
      <h1 color="white" className="styled-components__StyledH140-sc-1sz9c1e-0 gTA-dIt">Join us today to see your best cards offers</h1>
      <ul className="styled-components__ChecklistWrapper-sc-14iskce-4 jqlGTN">
        <ListedItem title="Get your free credit report" />
        <ListedItem title="No harm to your credit rating" />
        <ListedItem title="See your best offers" />
        <ListedItem title="Free forever" />
      </ul>
    </div>
  </div>
)

interface props {
  children?: JSX.Element | null
}

export const HeaderBanner = ({children = null}: props) => (
  <div data-testid="registration-hero" className="styled-components__HeroContainer-sc-14iskce-0 hiAHfm">
    {children}
  </div>
)