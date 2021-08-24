import Button from "@/components/Button"
import Layout from "@/components/Layout"
import TimeLine, { TimeLineEntry } from "@/components/TimeLine"

const Payment = () => {
    <Layout>
        {{
            header: <></>,
            main: <>
                <TimeLine>
                    <TimeLineEntry title="Login" done/>
                    <TimeLineEntry title="Adress" done/>
                    <TimeLineEntry title="Payment" active/>
                    <TimeLineEntry title="Confirm" inactive/>
                </TimeLine>
            </>,
            actions: <Button title="Confirm" linkTo="/confirm"/>
        }}
    </Layout>
}

export default Payment