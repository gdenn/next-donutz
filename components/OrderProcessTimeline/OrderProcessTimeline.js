import TimeLine, { TimeLineEntry } from "@/components/TimeLine"


export const orderTimelineStep = {
    LOGIN: "Login",
    ADDRESS: "address",
    PAYMENT: "payment",
    CONFIRM: "confirm",
    FINISHED: "finished"
}

const steps = [
    orderTimelineStep.LOGIN,
    orderTimelineStep.ADDRESS,
    orderTimelineStep.PAYMENT,
    orderTimelineStep.CONFIRM,
    orderTimelineStep.FINISHED
]

const OrderProcessTimeline = ({currentStep}) => {

    let activeFound = false

    return (
        <TimeLine>
            {currentStep && steps.map(step => {

                const isActive = currentStep === step
                const isDone = !isActive && !activeFound
                const isInActive = !isActive && activeFound

                  const result = (
                    <TimeLineEntry 
                        key={`step-${step}`} 
                        title={step}
                        done={isDone}
                        inactive={isInActive}
                        active={isActive}/>
                )

                activeFound = isActive

                return result
            })}
        </TimeLine>
    )
}

export default OrderProcessTimeline