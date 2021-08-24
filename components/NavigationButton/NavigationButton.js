import Button from '@/components/Button'

import NextLink from 'next/link'

const NavigationButton = ({title, linkTo}) => (
    <NextLink href={linkTo}>
        <Button className="h-12 text-xl font-thin uppercase self-center mx-4" primary>
            {title}
        </Button>
    </NextLink>
)

export default NavigationButton