import NextLink from 'next/link'


export const BackLink = ({title, linkTo}) => (
    <span className="pointer hover:underline hover:text-black text-gray-600">
        <NextLink href={linkTo}>
            {title}
        </NextLink>
    </span>
)