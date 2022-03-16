// our-domin.com/new-meetup

import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
    function addMeetupHandler(enteredMeetupData){
        console.log(enteredMeetupData);
    }

    return <NewMeetupForm anAddMeetup={addMeetupHandler} />
}

export default NewMeetupPage;