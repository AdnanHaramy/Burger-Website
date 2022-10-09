import React from 'react';
import Footer from './footer';
import Header from './header';
import notes from '../notes'
import Note from './note';
function App() {
    return (
        <div>
            <Header />
            {
                notes.map(noteItem =>
                    <Note
                        key={noteItem.id}
                        title={noteItem.title}
                        content={noteItem.content} />)
            }
            <Footer />

        </div>
    )
}
export default App;