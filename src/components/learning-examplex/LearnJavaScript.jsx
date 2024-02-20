const person = {
    name: 'Cristian Manolache',
    age: '28',
    address: {
        line1: 'Baker Street', 
        city: 'Lonndon',
        country: 'UK'
    },
    profiles: ['twitter', 'facebook', 'instagram'],
    printProfile: () => {
        person.profiles.map(
            profile => console.log(profile)
        )
    }
}

export default function LearnJavaScript() {
    return (
        <div>
            <div>Name: {person.name}</div>
            <div>Age: {person.age}</div>
            <div>Address: {person.address.line1}</div>
            <div>Profile: {person.profiles[1]}</div>
            <div>{person.printProfile()}</div>
        </div>
        
    )
}