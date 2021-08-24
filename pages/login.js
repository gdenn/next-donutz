import Button from "@/components/Button"
import Layout from "@/components/Layout"
import OrderProcessTimeline, { orderTimelineStep } from "@/components/OrderProcessTimeline"

const Login = () => (
    <Layout>
        {{
            header: <></>,
            main: <>
                <OrderProcessTimeline currentStep={orderTimelineStep.LOGIN}/>
            </>,
            actions: <Button title="Address" linkTo="/address"/>
        }}
    </Layout>
)

export default Login