import { useReducer } from 'react';

function reducer(state, action) {
    if (action.type === 'incremented_age') {
        return {
            age: state.age + 1
        };
    } else {
        return {
            age: state.age - 1
        }
    }
    throw Error('Unknown action.');
}

export default function Counter() {
    const [state, dispatch] = useReducer(reducer, { age: 22 });

    return (
        <>
            <button onClick={() => {
                dispatch({ type: 'incremented_age' })
            }}>
                Increment age
            </button>
            <button onClick={() => {
                dispatch({ type: 'dec_age' })
            }}>
                Decrement age
            </button>
            <p>Hello! You are {state.age}.</p>
        </>
    );
}
