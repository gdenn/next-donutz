import Button from "@/components/Button"
import Layout from "@/components/Layout"
import TimeLine, { TimeLineEntry } from "@/components/TimeLine"

const Confirm = () => {
    <Layout>
        {{
            header: <></>,
            main: <>
                <TimeLine>
                    <TimeLineEntry title="Login" done/>
                    <TimeLineEntry title="Adress" done/>
                    <TimeLineEntry title="Payment" done/>
                    <TimeLineEntry title="Confirm" active/>
                    <TimeLineEntry title="Finished" inactive/>
                </TimeLine>
            </>,
            actions: <Button title="Finish" linkTo="/finished"/>
        }}
    </Layout>
}

export default Confirm