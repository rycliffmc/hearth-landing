import React, { useState, useEffect } from 'react'
import { NoiseOverlay } from './components/NoiseOverlay'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Philosophy from './components/Philosophy'
import SignUpModal from './components/SignUpModal'
import Terms from './components/Terms'
import Privacy from './components/Privacy'

function App() {
    const [showSignUpModal, setShowSignUpModal] = useState(false)
    const [currentHash, setCurrentHash] = useState(window.location.hash)

    useEffect(() => {
        const handleHashChange = () => {
            setCurrentHash(window.location.hash);
            window.scrollTo(0, 0);
        };
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const renderContent = () => {
        if (currentHash === '#terms') return <Terms />
        if (currentHash === '#privacy') return <Privacy />

        return (
            <>
                <Hero />
                <Features />
                <Philosophy onSignUpClick={() => setShowSignUpModal(true)} />
            </>
        )
    }

    return (
        <div className="min-h-screen bg-[var(--bg-color)] font-sans relative">
            <NoiseOverlay />
            <Navbar onSignUpClick={() => setShowSignUpModal(true)} />
            <main>
                {renderContent()}
            </main>
            {showSignUpModal && <SignUpModal onClose={() => setShowSignUpModal(false)} />}
        </div>
    )
}

export default App
