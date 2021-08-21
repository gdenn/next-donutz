

const Header = ({children}) => (
    <header className="h-20 bg-blue-500 shadow-lg flex-grow-0">
        <div className="container py-4 mx-auto px-4 md:px-12">
          <div className="flex flex-row justify-between">
              {children}
          </div>
        </div>
    </header>
)

export default Header