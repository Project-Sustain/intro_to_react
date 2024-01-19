
import Main from "./Main";


export default function App() { //this component renders a basic structure with the Main component inside of it

    const message = 'Blank Starting Page';

    return (
        <div>
            <Main //this places the Main component inside the App component
                title={message} //this passes the 'message' constant as a prop to the Main component
            />
        </div>
    );
}
