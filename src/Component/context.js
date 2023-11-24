import { useContext, createContext, useState } from "react";

export const userContext = createContext(null)

const Context_Example = () => {
    const [user, setUser] = useState(null)

    return (
        <userContext.Provider value={{ user, setUser }}>
            <Welcome/>
        </userContext.Provider>
    )

}

function Welcome({ children }) {
    const { user } = useContext(userContext);
    return (
        <Panel title="Welcome">
            {user !== null ?
                <Greeting /> :
                <LoginForm />
            }
        </Panel>
    );
}

function Greeting() {
    const { user } = useContext(userContext);
    return (
        <p>You logged in as {user.name}.</p>
    )
}

function LoginForm() {
    const { setUser } = useContext(userContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const canLogin = firstName !== '' && lastName !== '';
    return (
        <>
            <label>
                First name{': '}
                <input
                    required
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
            </label><br/>
            <label>
                Last name{': '}
                <input
                    required
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
            </label><br/><br/>
            <Button
                disabled={!canLogin}
                onClick={() => {
                    setUser({
                        name: firstName + ' ' + lastName
                    });
                }}
            >
                Log in
            </Button><br/>
            {!canLogin &&  <i><br/>Fill in both fields.</i>}
        </>
    );
}

function Panel({ title, children }) {
    return (
        <section>
            <h1>{title}</h1>
            {children}
        </section>
    )
}

function Button({ children, disabled, onClick }) {
    return (
      <button
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    );
}

export default Context_Example;