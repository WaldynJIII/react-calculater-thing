class FamousList extends Component {
    render() {
        // Holds famous people inside of <li> tags
        const famousPeopleList = [];
        for (let person of this.props.famousPeople) {
            let personListItem = (<li>{person.firstName} -
                                  {person.role}</li>);
            famousPeopleList.push(personListItem);
        }
        return (
            // Enclosing element
            <div>
                <h2>Famous List</h2>
                {JSON.stringify(this.props.famousPeople)}
                <ul>
                    {/* Famous People List */}
                    {famousPeopleList}
                </ul>
            </div>
        );
    }
}