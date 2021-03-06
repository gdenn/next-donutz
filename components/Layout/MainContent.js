

const MainContent = ({children}) => (
    <main className="bg-gray-200 flex-grow">
        <div className="container py-8 mx-auto px-4 md:px-12">
            {children}
        </div>
    </main>
)

export default MainContent