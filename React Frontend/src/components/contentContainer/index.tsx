
interface props {
  children?: JSX.Element | null
}

export const ContentContainer = ({children = null}: props) => (
  <main className="inclzr-0 iBlTai">
    <div className="Grid__StyledDiv-sc-1o91qoi-0 gwxTij">
      {children}
    </div>
  </main>
)