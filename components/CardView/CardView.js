const CardView = ({children}) => (
    <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
        {children}
    </div>
)

export default CardView;