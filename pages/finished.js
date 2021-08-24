import Button from "@/components/Button"
import Layout from "@/components/Layout"
import TimeLine, { TimeLineEntry } from "@/components/TimeLine"

const Finished = () => {
    <Layout>
        {{
            header: <></>,
            main: <>
                <TimeLine>
                    <TimeLineEntry title="Login" done/>
                    <TimeLineEntry title="Adress" done/>
                    <TimeLineEntry title="Payment" done/>
                    <TimeLineEntry title="Confirm" done/>
                    <TimeLineEntry title="Finished" active/>
                </TimeLine>
            </>
        }}
    </Layout>
}

export default Finished