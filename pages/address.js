import Button from "@/components/Button"
import Layout from "@/components/Layout"
import TimeLine, { TimeLineEntry } from "@/components/TimeLine"

const Address = () => {
    <Layout>
        {{
            header: <></>,
            main: <>
                <TimeLine>
                    <TimeLineEntry title="Login" done/>
                    <TimeLineEntry title="Adress" active/>
                    <TimeLineEntry title="Payment" inactive/>
                    <TimeLineEntry title="Confirm" inactive/>
                </TimeLine>
            </>,
            actions: <Button title="Payment" linkTo="/payment"/>
        }}
    </Layout>
}

export default Address