

const Header = ({children}) => (
    <header className="h-16 py-2 bg-blue-500 shadow-lg flex-grow-0">
        <div className="container mx-auto px-12">
          <div className="flex flex-row justify-between place-items-center">
              {children}
          </div>
        </div>
    </header>
)

export default Header