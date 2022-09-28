import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'first meetup',
        image: 'https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320',
        address: 'Address 1',
        description: 'first meetup'
    },
    {
        id: 'm2',
        title: 'second meetup',
        image: 'https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320',
        address: 'Address 2',
        description: 'second meetup'
    }
]
const HomePage = (props) => {
    return (
        <MeetupList meetups={props.meetups}/>
    )
}

// preserve name ， prepare props when build process (not server or client)，great from seo
export const getStaticProps = () => {
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        // revalidate: 10
    }
}

// export const getServerSideProps = (context) => {
//     const req = context.req;
//     const res = context.res; 
//     return {
//         props:
//     }
// }

export default HomePage;