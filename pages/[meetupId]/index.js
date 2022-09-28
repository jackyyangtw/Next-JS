import MeetupDetail from "../../components/meetups/MettupDetail";
const MeetupDetails = () => {
    return (
        <MeetupDetail
        id="m1"
        address="Address 1"
        description="first meetup"
        title="first meetup" 
        image="https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320" 
        />
    )
}

export const getStaticPaths = () => {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1'
                }
            },
            {
                params: {
                    meetupId: 'm2'
                }
            }
        ]
    }
}

export const getStaticProps = (context) => {
    const meetupId = context.params.meetupId;

    // log in 終端
    console.log(meetupId);
    return {
        props: {
            meetupData: {
                id: meetupId,
                title: ''
            }
        }
    }
}

export default MeetupDetails;