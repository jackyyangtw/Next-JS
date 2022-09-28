import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {

    const addMettupHandler = async (enteredMeetupData) => {
        const res = await fetch('/api/new-meetup', {
            method: "POST",
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json();
        console.log(data)
    }
    
    return <NewMeetupForm onAddMeetup={addMettupHandler}/>
}
export default NewMeetupPage;